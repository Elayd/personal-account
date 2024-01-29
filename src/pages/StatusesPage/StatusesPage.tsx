import StatusBadge from '../../components/StatusBadge/StatusBadge.tsx';
import useStatusBadgesQuery from './queryHooks/useStatusBadgesQuery.tsx';
import Loader from '../../components/Loader/Loader.tsx';

const StatusesPage = () => {
  const { data, isLoading } = useStatusBadgesQuery();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Application Statuses</h1>
      {data?.statuses.map((status, index) => {
        return <StatusBadge key={index} color={status.color} text={status.text} />;
      })}
    </div>
  );
};

export default StatusesPage;
