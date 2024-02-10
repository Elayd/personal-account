import { memo, ReactNode } from 'react';

interface IArticleProps {
  children: ReactNode;
}

const Article = memo((props: IArticleProps) => {
  const { children } = props;
  return (
    <div className={`rounded-2xl bg-gray-50 py-5 ring-1 ring-inset ring-gray-900 lg:py-32 w-full overflow-hidden mx-2`}>{children}</div>
  );
});

export default Article;
