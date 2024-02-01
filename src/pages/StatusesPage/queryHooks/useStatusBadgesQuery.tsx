import { useQuery, UseQueryResult } from 'react-query';
import { IStatusBadge } from '../types/types.ts';
import { StatusBadgesData } from '../api/api.ts';
import useUserStore from '../../AuthPage/store/user.ts';

const useStatusBadgesQuery = (): UseQueryResult<IStatusBadge> => {
  const token = useUserStore((state) => state.user.accessToken);
  const id = useUserStore((state) => state.user.user.id);
  return useQuery(
    ['statusBadges', id],
    () =>
      StatusBadgesData.getStatusBadges(id, token).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      }),
    {
      onError: (error) => {
        console.log('Failed to fetch statuses:', error);
      },
      cacheTime: 60000
    }
  );
};

export default useStatusBadgesQuery;
