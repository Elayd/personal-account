import { memo, ReactNode } from 'react';

interface IInformationBlockProps {
  children: ReactNode;
}

const InformationBlock = memo((props: IInformationBlockProps) => {
  const { children } = props;
  return <div className={`rounded-2xl bg-white-50 mt-20 py-5 ring-1 ring-inset ring-gray-500 lg:self-end`}>{children}</div>;
});

export default InformationBlock;
