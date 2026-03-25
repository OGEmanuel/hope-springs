import { useAppForm } from '#/hooks/form';
import useSendRequest from '#/hooks/form-submit';
import { MUTATIONS } from '#/lib/queries';
import { revalidateLogic } from '@tanstack/react-form';
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
  insuranceProvider: z.string().optional(),
  message: z
    .string()
    .min(10, { message: 'Message should be at least 10 characters long' }),
});

type formSchemaType = z.infer<typeof formSchema>;

const ContactForm = () => {
  const form = useAppForm({
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      insuranceProvider: undefined,
      message: '',
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
        insuranceProvider: value.insuranceProvider,
        message: value.message,
      });
    },
  });

  const { mutate, isPending } = useSendRequest<
    {
      fullName: string;
      phoneNumber: string;
      emailAddress: string;
      insuranceProvider?: string;
      message: string;
    },
    any
  >({
    mutationFn: (data: {
      fullName: string;
      phoneNumber: string;
      emailAddress: string;
      insuranceProvider?: string;
      message: string;
    }) => MUTATIONS.sendContact(data),
    successToast: {
      title: 'Success',
      description: 'Your message has been sent successfully.',
    },
    errorToast: {
      title: 'Error',
      description: 'An unexpected error occurred. Please try again.',
    },
    onSuccessCallback: () => {
      form.reset();
    },
  });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="w-full max-w-140 space-y-6"
    >
      <form.AppField name="fullName">
        {field => (
          <field.TextField label="Full name" placeholder="Your full name" />
        )}
      </form.AppField>
      <form.AppField name="phoneNumber">
        {field => <field.PhoneField label="Phone number" />}
      </form.AppField>
      <form.AppField name="emailAddress">
        {field => (
          <field.TextField
            label="Email address"
            placeholder="Your@email.com"
            type="email"
          />
        )}
      </form.AppField>
      <form.AppField name="insuranceProvider">
        {field => (
          <field.TextField
            label="Insurance provider"
            placeholder="Optional"
            optional
          />
        )}
      </form.AppField>
      <form.AppField name="message">
        {field => (
          <field.TextArea label="Message" placeholder="How can we help?" />
        )}
      </form.AppField>
      <div className="flex flex-col gap-4">
        <div className="flex justify-end">
          <form.AppForm>
            <form.SubscribeButton isPending={isPending} label="Send message" />
          </form.AppForm>
        </div>
        <p className="text-sm/6 text-[#717171]">
          All information submitted is kept strictly confidential in accordance
          with HIPAA and applicable Maryland regulations.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
