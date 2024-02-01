import { RadioButtonGroupProps } from '../../types/types.ts';

const RadioButtonGroup = ({ options, selectedOption, onChange, disabled, label }: RadioButtonGroupProps) => {
  return (
    <>
      {label && <label className="block text-sm font-medium leading-6 text-gray-900">{label}</label>}
      {options.map((option) => (
        <div key={option.id} className="mb-1 flex items-center">
          <input
            className="appearance-none h-5 w-5 border-2 border-solid border-neutral-300 rounded-full checked:bg-primary checked:border-primary checked:ring-2 checked:ring-primary"
            type="radio"
            disabled={disabled}
            id={option.id}
            checked={selectedOption === option.id}
            onChange={() => onChange(option.id)}
          />
          <label className="ml-2 cursor-pointer" htmlFor={option.id}>
            {option.label}
          </label>
        </div>
      ))}
    </>
  );
};

export default RadioButtonGroup;
