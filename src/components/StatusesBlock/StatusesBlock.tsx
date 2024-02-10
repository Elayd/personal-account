import StatusBadge from '../StatusBadge/StatusBadge.tsx';
import useGetStatusesQuery from './queryHooks/useGetStatusesQuery.tsx';
import { memo } from 'react';

const StatusesBlock = memo(() => {
  const { data } = useGetStatusesQuery();

  const statuses = data?.[0].statuses;

  return (
    <div className={'rounded-2xl ring-1 ring-inset ring-gray-500 p-4'}>
      <h2 className="mt-15 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Delivery Statuses</h2>

      {statuses?.map((status, index) => {
        return (
          <div className={'flex flex-col items-center mx-10'}>
            <StatusBadge key={index} color={status.color} text={status.text} />
            {index + 1 < statuses?.length && <div className={'mt-2 text-2xl'}>↓</div>}
          </div>
        );
      })}
    </div>
  );
});

export default StatusesBlock;
