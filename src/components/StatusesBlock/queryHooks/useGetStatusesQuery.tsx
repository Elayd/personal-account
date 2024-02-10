import { useQuery, UseQueryResult } from 'react-query';
import useUserStore from '../../../pages/AuthPage/store/user.ts';
import { useParams } from 'react-router-dom';
import { TStatusBadge } from '../types/types.ts';
import { Statuses } from '../api/api.ts';

const useGetStatusesQuery = (): UseQueryResult<TStatusBadge[]> => {
  const token = useUserStore((state) => state.user.accessToken);
  const id = useUserStore((state) => state.user.user.id);
  const { id: appId } = useParams();
  return useQuery(
    ['useStatusesData', appId],
    () =>
      Statuses.getStatusesInfo(id, Number(appId), token).then((response) => {
        return response;
      }),
    {
      onError: (error) => {
        console.log('Failed to get user data:', error);
      },
      cacheTime: 60000
    }
  );
};

export default useGetStatusesQuery;
