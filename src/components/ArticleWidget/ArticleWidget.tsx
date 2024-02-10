import Article from '../Article/Article.tsx';
import useGetArticleInfoQuery from './queryHooks/useGetArticleInfoQuery.tsx';
import { memo } from 'react';

const ArticleWidget = memo(() => {
  const { data } = useGetArticleInfoQuery();

  const article = data?.[0];

  return (
    <>
      <Article>
        <div className="flex justify-between mx-10">
          <div className="flex flex-col text-left">
            <span className={'font-bold'}>Name: </span>
            <span>{article?.name}</span>
            <span className={'font-bold'}>Surname: </span>
            <span>{article?.secondName}</span>
            <span className={'font-bold'}>Address:</span>
            <span>{article?.address}</span>
            <span className={'font-bold'}>Phone number:</span>
            <span>{article?.phoneNumber}</span>
          </div>

          <div className="flex flex-col justify-self-end text-left">
            <span className={'font-bold'}>Payment method:</span>
            <span>{article?.paymentMethod}</span>
            <span className={'font-bold'}>Total price:</span>
            <span>{article?.totalPrice}$</span>
            <span className={'font-bold'}>Goods price:</span>
            <span>{article?.goodsPrice}$</span>
            <span className={'font-bold'}>Delivery price:</span>
            <span>{article?.deliveryPrice}$</span>
          </div>

          <div className="flex flex-col justify-self-end text-right">
            <span className={'font-bold'}>Delivery method:</span>
            <span>{article?.deliveryMethod}</span>
            <span className={'font-bold'}>Delivery date:</span>
            <span>{article?.deliveryData}</span>
            <span className={'font-bold'}>Delivery company:</span>
            <span>{article?.deliveryCompany}</span>
          </div>
        </div>
      </Article>
    </>
  );
});

export default ArticleWidget;
