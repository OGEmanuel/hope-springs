import ContactEmail from '#/components/email/contact/contact';
import { ThankYouEmail } from '#/components/email/contact/thank-you';
import { createFileRoute } from '@tanstack/react-router';
import type { JSX } from 'react';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export const Route = createFileRoute('/email/api/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const {
            fullName,
            phoneNumber,
            emailAddress,
            insuranceProvider,
            message,
          } = await request.json();

          if (!fullName || !phoneNumber || !emailAddress) {
            return new Response(
              JSON.stringify({
                error: 'Full name, phone, and email are required fields.',
              }),
              { status: 400, headers: { 'Content-Type': 'application/json' } },
            );
          }

          const ownerEmail = 'Carevina Health <info@carevinahealth.com>';

          // Function to send emails
          const sendEmail = async ({
            to,
            subject,
            reactTemplate,
          }: {
            to: string;
            subject: string;
            reactTemplate: JSX.Element;
          }) => {
            await resend.emails.send({
              from: ownerEmail,
              to,
              subject,
              react: reactTemplate,
            });
          };

          // Send ThankYou email to form filler
          await sendEmail({
            to: emailAddress,
            subject:
              "We've received your message! - Hope Springs Behavioral Health",
            reactTemplate: ThankYouEmail({ fullName }),
          });

          // Send Notice email to the owner
          await sendEmail({
            to: ownerEmail,
            subject: `New Form Submission from ${fullName}`,
            reactTemplate: ContactEmail({
              fullName,
              phoneNumber,
              emailAddress,
              insuranceProvider,
              message,
            }),
          });

          return new Response(
            JSON.stringify({ success: 'Emails sent successfully.' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } },
          );
        } catch (error: any) {
          console.error('Error occurred:', error);

          return new Response(
            JSON.stringify({
              error: 'An unexpected error occurred. Please try again later.',
              details: error.message || 'Unknown error',
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' } },
          );
        }
      },
    },
  },
});
