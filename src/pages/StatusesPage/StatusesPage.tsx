import StatusBadge from '../../components/StatusBadge/StatusBadge.tsx';
import useStatusBadgesQuery from './queryHooks/useStatusBadgesQuery.tsx';
import Loader from '../../components/Loader/Loader.tsx';

const StatusesPage = () => {
  const { data, isLoading } = useStatusBadgesQuery();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Application Statuses</h2>
      </div>
      <div className="container mx-auto p-4 flex flex-col items-center">
        {data?.statuses.map((status, index) => {
          return <StatusBadge key={index} color={status.color} text={status.text} />;
        })}
      </div>
    </>
  );
};

export default StatusesPage;
