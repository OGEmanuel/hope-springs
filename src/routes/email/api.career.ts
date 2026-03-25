import CareerEmail from '#/components/email/career/career';
import CareerReceiptEmail from '#/components/email/career/thank-you';
import { createFileRoute } from '@tanstack/react-router';
import type { JSX } from 'react';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx'];

export const Route = createFileRoute('/email/api/career')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const formData = await request.formData();

          const fullName = formData.get('fullName') as string | null;
          const phoneNumber = formData.get('phone') as string | null;
          const email = formData.get('email') as string | null;
          const position = formData.get('position') as string | null;
          const resume = formData.get('resume') as File | null;

          if (!fullName || !phoneNumber || !email || !position || !resume) {
            return Response.json(
              {
                error:
                  'Full name, phone, position, resume, and email are required fields.',
              },
              { status: 400 },
            );
          }

          // -------------------------
          // File size validation
          // -------------------------
          if (resume.size > MAX_FILE_SIZE) {
            return Response.json(
              {
                error: 'Resume must be less than 5MB.',
              },
              { status: 400 },
            );
          }

          // -------------------------
          // File type validation
          // -------------------------
          const fileExtension = resume.name
            .slice(resume.name.lastIndexOf('.'))
            .toLowerCase();

          if (
            !ALLOWED_EXTENSIONS.includes(fileExtension) ||
            !ALLOWED_MIME_TYPES.includes(resume.type)
          ) {
            return Response.json(
              {
                error: 'Only PDF, DOC, and DOCX files are allowed.',
              },
              { status: 400 },
            );
          }

          const ownerEmail = 'Carevina Health <info@carevinahealth.com>';

          // Convert File → Buffer
          const resumeBuffer = Buffer.from(await resume.arrayBuffer());

          const sendEmail = async ({
            to,
            subject,
            reactTemplate,
            attachments,
          }: {
            to: string;
            subject: string;
            reactTemplate: JSX.Element;
            attachments?: {
              filename: string;
              content: Buffer;
            }[];
          }) => {
            await resend.emails.send({
              from: ownerEmail,
              to,
              subject,
              react: reactTemplate,
              attachments,
            });
          };

          // Thank-you email (no attachment)
          await sendEmail({
            to: email,
            subject:
              "We've received your application! - Hope Springs Behavioral Health",
            reactTemplate: CareerReceiptEmail({ fullName, position }),
          });

          // Owner email (with resume)
          await sendEmail({
            to: ownerEmail,
            subject: `New Application from ${fullName}`,
            reactTemplate: CareerEmail({
              fullName,
              resume: resume.name,
              phoneNumber,
              email,
              position,
            }),
            attachments: [
              {
                filename: resume.name,
                content: resumeBuffer,
              },
            ],
          });

          return Response.json(
            { success: 'Emails sent successfully.' },
            { status: 200 },
          );
        } catch (error: any) {
          console.error('Error occurred:', error);

          return Response.json(
            {
              error: 'An unexpected error occurred. Please try again later.',
              details: error?.message ?? 'Unknown error',
            },
            { status: 500 },
          );
        }
      },
    },
  },
});
