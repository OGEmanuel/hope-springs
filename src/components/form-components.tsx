import { useStore } from '@tanstack/react-form';

import { useFieldContext, useFormContext } from '#/hooks/form-context';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

import { Button } from '#/components/ui/button';
import { Input } from '#/components/ui/input';
import { Textarea as ShadcnTextarea } from '#/components/ui/textarea';
import * as ShadcnSelect from '#/components/ui/select';
import { Label } from '#/components/ui/label';
import { cn } from '#/lib/utils';
import FileIcon from './jsx-icons/file';

export function SubscribeButton({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const form = useFormContext();
  return (
    <form.Subscribe selector={state => state.isSubmitting}>
      {isSubmitting => (
        <Button
          type="submit"
          disabled={isSubmitting}
          className={cn('w-full', className)}
        >
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
  className,
}: {
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  optional?: boolean;
  className?: string;
}) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, state => state.meta.errors);

  return (
    <div className={cn('flex flex-col gap-1', className)}>
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
        className={cn(
          'border-border text-extra-2 h-12 w-full rounded-[12px] px-4 text-base/6 font-medium shadow-none placeholder:text-[#A9AAAB]',
        )}
      />
      {field.state.meta.isTouched && <ErrorMessages errors={errors} />}
    </div>
  );
}

export const PhoneField = ({
  label,
  placeholder,
  className,
}: {
  label: string;
  placeholder?: string;
  className?: string;
}) => {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, state => state.meta.errors);

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <FormLabel label={label} />
      <PhoneInput
        international
        defaultCountry="US"
        placeholder={placeholder}
        value={field.state.value as string}
        onChange={value => field.handleChange(value as string)}
        onBlur={field.handleBlur}
        className={cn(
          'phone-input text-extra-2 border-border h-12 rounded-[12px] border px-4 text-base/6 tracking-[-0.02em] shadow-none placeholder:text-[#A3A19D] [&>input]:h-full [&>input]:focus:outline-none',
        )}
      />
      {field.state.meta.isTouched && <ErrorMessages errors={errors} />}
    </div>
  );
};

export const UploadFileField = ({
  label,
  handleFileChange,
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
  handleDrop,
  files,
  setFiles,
  isDragging,
  resume,
  className,
}: {
  label: string;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDragEnter: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  isDragging: boolean;
  resume: any;
  className?: string;
}) => {
  const field = useFieldContext<File>();
  const errors = useStore(field.store, state => state.meta.errors);

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <Label
        htmlFor={field.name}
        className="text-base/7 font-medium text-[#717171]"
      >
        <Input
          id={field.name}
          name={field.name}
          onBlur={field.handleBlur}
          onChange={handleFileChange}
          accept=".pdf,.docx,.doc"
          type="file"
          className="hidden"
        />
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={cn(
            'flex w-full items-end justify-between rounded-xl border border-dashed border-[#D9D9D9] px-4 py-3 leading-6 tracking-[-0.01em]',
            isDragging ? 'cursor-grabbing' : 'cursor-pointer',
            files.length > 0 && 'border-0 bg-[#18191A0D] p-3',
          )}
        >
          <div className="flex basis-full items-center gap-2">
            {/* {files.length > 0 ? <DocumentFill /> : <DocumentEmpty />} */}
            <p
              className={cn(
                'text-[#707980]',
                files.length > 0 &&
                  'line-clamp-1 font-medium text-ellipsis text-[#10202B]',
              )}
            >
              {files.length > 0 ? (
                files[0].name
              ) : (
                <span className="flex items-center gap-3">
                  <FileIcon />
                  <span className="flex flex-col gap-1 leading-6 text-[#2D3132]">
                    Resume
                    <span className="leading-6 text-[#717171]">
                      Upload a file
                    </span>
                  </span>
                </span>
              )}
            </p>
          </div>
          <div className="flex basis-full justify-end">
            {files.length > 0 ? (
              <button
                onClick={() => {
                  (setFiles([]), resume.setValue([]));
                }}
                className="cursor-pointer font-medium text-[#10202B99]"
              >
                Change
              </button>
            ) : (
              <p className="text-[#10202B99]">.pdf, .docx, .doc</p>
            )}
          </div>
        </div>
      </Label>
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
  className,
}: {
  label: string;
  values: Array<{ label: string; value: string }>;
  placeholder?: string;
  className?: string;
}) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, state => state.meta.errors);

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <FormLabel label={label} />
      <ShadcnSelect.Select
        name={field.name}
        value={field.state.value}
        onValueChange={value => field.handleChange(value)}
      >
        <ShadcnSelect.SelectTrigger className="border-border h-12! w-full rounded-[12px] border px-4 text-base/6 font-medium shadow-none placeholder:text-[#A9AAAB]">
          <ShadcnSelect.SelectValue placeholder={placeholder} />
        </ShadcnSelect.SelectTrigger>
        <ShadcnSelect.SelectContent className="bg-background text-foreground border-none">
          <ShadcnSelect.SelectGroup>
            {values.map(value => (
              <ShadcnSelect.SelectItem
                key={value.value}
                value={value.value}
                className="text-foreground hover:bg-muted-foreground!"
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
