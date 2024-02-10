import { Link, useParams } from 'react-router-dom';
import StatusesBlock from '../../components/StatusesBlock/StatusesBlock.tsx';
import ArticleWidget from '../../components/ArticleWidget/ArticleWidget.tsx';
import GoodsInformationWidget from '../../components/GoodsInformationWidget/GoodsInformationWidget.tsx';
import { Button } from '../../components/Button/Button.tsx';

const ApplicationPage = () => {
  const { id } = useParams();
  return (
    <>
      <div className={'flex flex-end p-4'}>
        <Link to="/applications">
          <Button text={'← Applications'} />
        </Link>
      </div>
      <div className="container mx-auto p-4 flex flex-col items-center">
        <h2 className="mt-12 mb-12 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">Application №{id}</h2>
        <ArticleWidget />
        <GoodsInformationWidget />
        <div className={'mt-10 self-start'}>
          <StatusesBlock />
        </div>
      </div>
    </>
  );
};

export default ApplicationPage;
