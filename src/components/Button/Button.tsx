import { memo } from 'react';

type TButtonProps = {
  text: string;
};
export const Button = memo((props: TButtonProps) => {
  const { text } = props;
  return (
    <button
      type="submit"
      className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
    >
      {text}
    </button>
  );
});
