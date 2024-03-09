import { HTMLInputTypeAttribute } from 'react';

interface CustomInputProps {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
  errors: string[];
}

function CustomInput({
  type,
  placeholder,
  required = true,
  errors,
}: CustomInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="w-full h-10 transition bg-transparent border-none rounded-md focus:outline-none ring-2 focus:ring-4 ring-neutral-200 focus:ring-orange-500 placeholder:text-neutral-400"
        type={type}
        placeholder={placeholder}
        required={required}
      />
      <span className="font-medium text-red-500">
        {errors.map((error) => (
          <span key={error}>{error}</span>
        ))}
      </span>
    </div>
  );
}

export default CustomInput;
