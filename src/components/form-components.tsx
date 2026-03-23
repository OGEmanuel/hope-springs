import { useStore } from '@tanstack/react-form';

import { useFieldContext, useFormContext } from '#/hooks/form-context';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

import { Button } from '#/components/ui/button';
import { Input } from '#/components/ui/input';
import { Textarea as ShadcnTextarea } from '#/components/ui/textarea';
import * as ShadcnSelect from '#/components/ui/select';
import { Label } from '#/components/ui/label';

export function SubscribeButton({ label }: { label: string }) {
  const form = useFormContext();
  return (
    <form.Subscribe selector={state => state.isSubmitting}>
      {isSubmitting => (
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {label}
        </Button>
      )}
    </form.Subscribe>
  );
}

const FormLabel = (props: { label: string }) => {
  const { label } = props;
  return (
    <Label htmlFor={label} className="text-base/7 font-medium text-[#717171]">
      {label}
    </Label>
  );
};

function ErrorMessages({
  errors,
}: {
  errors: Array<string | { message: string }>;
}) {
  return (
    <>
      {errors.map(error => (
        <div
          key={typeof error === 'string' ? error : error.message}
          className="text-sm font-light text-red-500"
        >
          {typeof error === 'string' ? error : error.message}
        </div>
      ))}
    </>
  );
}

export function TextField({
  label,
  placeholder,
  type,
  optional,
}: {
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  optional?: boolean;
}) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, state => state.meta.errors);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <FormLabel label={label} />
        {optional && (
          <span className="leading-7 font-medium text-[#145D7E]">
            *Optional
          </span>
        )}
      </div>
      <Input
        value={field.state.value}
        placeholder={placeholder}
        onBlur={field.handleBlur}
        type={type}
        onChange={e => field.handleChange(e.target.value)}
        className="border-border text-extra-2 h-12 rounded-[12px] px-4 text-base/6 font-medium shadow-none placeholder:text-[#A9AAAB]"
      />
      {field.state.meta.isTouched && <ErrorMessages errors={errors} />}
    </div>
  );
}

export const PhoneField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder?: string;
}) => {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, state => state.meta.errors);

  return (
    <div className="flex flex-col gap-1">
      <FormLabel label={label} />
      <PhoneInput
        international
        defaultCountry="US"
        placeholder={placeholder}
        value={field.state.value as string}
        onChange={value => field.handleChange(value as string)}
        onBlur={field.handleBlur}
        className="phone-input text-extra-2 border-border h-12 rounded-[12px] border px-4 text-base/6 tracking-[-0.02em] shadow-none placeholder:text-[#A3A19D] [&>input]:h-full [&>input]:focus:outline-none"
      />
      {field.state.meta.isTouched && <ErrorMessages errors={errors} />}
    </div>
  );
};

export function TextArea({
  label,
  rows = 3,
  placeholder,
}: {
  label: string;
  rows?: number;
  placeholder?: string;
}) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, state => state.meta.errors);

  return (
    <div className="flex flex-col gap-1">
      <FormLabel label={label} />
      <ShadcnTextarea
        id={label}
        value={field.state.value}
        onBlur={field.handleBlur}
        placeholder={placeholder}
        rows={rows}
        onChange={e => field.handleChange(e.target.value)}
        className="border-border text-extra-2 h-60 resize-y rounded-[12px] px-4 text-base/6 font-medium shadow-none placeholder:text-[#A9AAAB]"
      />
      {field.state.meta.isTouched && <ErrorMessages errors={errors} />}
    </div>
  );
}

export function Select({
  label,
  values,
  placeholder,
}: {
  label: string;
  values: Array<{ label: string; value: string }>;
  placeholder?: string;
}) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, state => state.meta.errors);

  return (
    <div>
      <ShadcnSelect.Select
        name={field.name}
        value={field.state.value}
        onValueChange={value => field.handleChange(value)}
      >
        <ShadcnSelect.SelectTrigger className="w-full">
          <ShadcnSelect.SelectValue placeholder={placeholder} />
        </ShadcnSelect.SelectTrigger>
        <ShadcnSelect.SelectContent className="bg-background text-foreground">
          <ShadcnSelect.SelectGroup>
            <ShadcnSelect.SelectLabel>{label}</ShadcnSelect.SelectLabel>
            {values.map(value => (
              <ShadcnSelect.SelectItem
                key={value.value}
                value={value.value}
                className="text-foreground"
              >
                {value.label}
              </ShadcnSelect.SelectItem>
            ))}
          </ShadcnSelect.SelectGroup>
        </ShadcnSelect.SelectContent>
      </ShadcnSelect.Select>
      {field.state.meta.isTouched && <ErrorMessages errors={errors} />}
    </div>
  );
}
