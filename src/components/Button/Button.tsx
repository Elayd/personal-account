import { memo } from 'react';

type TButtonProps = {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = memo((props: TButtonProps) => {
  const { text, disabled, onClick } = props;

  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm 
        ${disabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-800 text-white hover:bg-white-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600'}`}
    >
      {text}
    </button>
  );
});
