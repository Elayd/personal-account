import { ChangeEvent, memo } from 'react';

type TInputProps = {
  id?: string;
  name?: string;
  type?: string;
  autoComplete?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  disabled?: boolean;
};

const Input = memo(({ id, name, type, autoComplete, value, onChange, label, disabled }: TInputProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          disabled={disabled}
          type={type}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          className="block w-full rounded-md border-0 py-1.5 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
});

export default Input;
