import Card from '../../components/Card/Card.tsx';
import useGetApplicationQuery from './queryHooks/useGetApplicationQuery.tsx';
import { ICardProps } from '../../types/types.ts';
import { Fragment, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../../components/Loader/Loader.tsx';

const ApplicationsPage = () => {
  const { data, fetchNextPage, hasNextPage } = useGetApplicationQuery();

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <InfiniteScroll dataLength={data?.pages.length || 0} next={fetchNextPage} hasMore={hasNextPage || false} loader={<Loader />}>
      <div className="flex items-center justify-center flex-wrap gap-4">
        {data?.pages.map((page, pageIndex) => (
          <Fragment key={pageIndex}>
            {page.map((item: ICardProps) => (
              <Card
                key={item?.applicationID}
                applicationID={item?.applicationID}
                finalStatusColor={item?.finalStatusColor}
                finalStatusText={item?.finalStatusText}
                price={item?.price}
              />
            ))}
          </Fragment>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default ApplicationsPage;
