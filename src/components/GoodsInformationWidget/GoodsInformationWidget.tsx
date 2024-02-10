import InformationBlock from '../InformationBlock/InformationBlock.tsx';
import useGetGoodInformationQuery from './queryHooks/useGetGoodInformationQuery.tsx';
import { memo } from 'react';

const GoodsInformationWidget = memo(() => {
  const { data } = useGetGoodInformationQuery();

  const goodsInfo = data?.[0].goods;

  return (
    <>
      <InformationBlock>
        <div className="flex mx-10 flex-row items-center">
          {goodsInfo?.map((item) => {
            return (
              <>
                <div className={'flex flex-col items-center'}>
                  <div className={'flex flex-col'}>
                    <img src={`${item.imgUrl}`} />
                  </div>
                  <div className={'flex flex-col'}>
                    <span className={'font-bold'}>Product:</span>
                    <span>{item.productName}</span>
                  </div>
                  <div className={'flex flex-col'}>
                    <span className={'font-bold'}>Price:</span>
                    <span>{item.price}$</span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </InformationBlock>
    </>
  );
});

export default GoodsInformationWidget;
