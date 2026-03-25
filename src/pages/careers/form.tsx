import { useAppForm } from '#/hooks/form';
import useSendRequest from '#/hooks/form-submit';
import { MUTATIONS } from '#/lib/queries';
import { revalidateLogic, useField } from '@tanstack/react-form';
import { useState } from 'react';
import z from 'zod';

const formSchema = z.object({
  fullName: z
    .string({ error: 'Full name is required' })
    .min(2, { message: 'Full name should be at least 2 characters long' }),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    error: 'Please enter a valid phone number.',
  }),
  emailAddress: z.email({
    error: 'Please enter a valid email address.',
  }),
  resume: z
    .array(z.instanceof(File))
    .refine(value => value === undefined || value.length > 0, {
      message: 'Please select at least one file',
    })
    .refine(
      value =>
        value === undefined ||
        value.every(file => {
          const ext = file.name.toLowerCase().split('.').pop();
          return ['pdf', 'docx', 'doc'].includes(ext ?? '');
        }),
      { message: 'Only PDF, DOCX, and DOC files are allowed' },
    ),
  position: z.string().min(2, {
    message: 'Please select a position.',
  }),
});

type formSchemaType = z.infer<typeof formSchema>;

const positionOptions = [
  { label: 'Career Development', value: 'career-development' },
  { label: 'Behavioral Health', value: 'behavioral-health' },
  { label: 'Clinical Support', value: 'clinical-support' },
  { label: 'Administrative Support', value: 'administrative-support' },
];

const CareersForm = () => {
  const [files, setFiles] = useState<File[]>([]);

  const form = useAppForm({
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      resume: [],
      position: '',
    } as formSchemaType,
    validationLogic: revalidateLogic(),
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: ({ value }) => {
      mutate({
        fullName: value.fullName,
        phoneNumber: value.phoneNumber,
        emailAddress: value.emailAddress,
        position: value.position,
        resume: value.resume,
      });
    },
  });

  const resume = useField({
    form,
    name: 'resume',
  });

  const { mutate, isPending } = useSendRequest<
    {
      fullName: string;
      phoneNumber: string;
      emailAddress: string;
      position: string;
      resume: File[];
    },
    any
  >({
    mutationFn: (data: {
      fullName: string;
      phoneNumber: string;
      emailAddress: string;
      position: string;
      resume: File[];
    }) => MUTATIONS.sendCareer(data),
    successToast: {
      title: 'Success',
      description: 'Your application has been sent successfully.',
    },
    errorToast: {
      title: 'Error',
      description: 'An unexpected error occurred. Please try again.',
    },
    onSuccessCallback: () => {
      form.reset();
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles(newFiles);
      resume.setValue(newFiles);
    }
  };

  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      const updatedFiles = [...files, ...newFiles];
      setFiles(updatedFiles);
      resume.setValue(updatedFiles);
    }
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="grid w-full max-w-140 grid-cols-2 gap-x-4 gap-y-6"
    >
      <form.AppField name="fullName">
        {field => (
          <field.TextField
            label="Full name"
            placeholder="Your full name"
            className="col-[1/span_2]"
          />
        )}
      </form.AppField>
      <form.AppField name="phoneNumber">
        {field => (
          <field.PhoneField
            label="Phone number"
            className="max-md:col-[1/span_2]"
          />
        )}
      </form.AppField>
      <form.AppField name="emailAddress">
        {field => (
          <field.TextField
            label="Email address"
            placeholder="Your@email.com"
            type="email"
            className="max-md:col-[1/span_2]"
          />
        )}
      </form.AppField>
      <form.AppField name="resume">
        {field => (
          <field.UploadFileField
            className="col-[1/span_2]"
            label="Resume"
            handleFileChange={handleFileChange}
            handleDragEnter={handleDragEnter}
            handleDragLeave={handleDragLeave}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
            files={files}
            setFiles={setFiles}
            isDragging={isDragging}
            resume={resume}
          />
        )}
      </form.AppField>
      <form.AppField name="position">
        {field => (
          <field.Select
            label="Position applying for"
            placeholder="Select a position"
            values={positionOptions}
            className="col-[1/span_2]"
          />
        )}
      </form.AppField>
      <div className="col-[1/span_2] flex justify-end">
        <form.AppForm>
          <form.SubscribeButton isPending={isPending} label="Send message" />
        </form.AppForm>
      </div>
    </form>
  );
};

export default CareersForm;
