import { useInfiniteQuery, UseInfiniteQueryResult } from 'react-query';
import useUserStore from '../../AuthPage/store/user.ts';
import { ICardProps } from '../../../types/types.ts';
import { Applications } from '../api/api.ts';

const useGetApplicationQuery = (): UseInfiniteQueryResult<ICardProps[], Error> => {
  const token = useUserStore((state) => state.user.accessToken);
  const id = useUserStore((state) => state.user.user.id);

  return useInfiniteQuery<ICardProps[], Error>(
    ['applications', id],
    ({ pageParam = 0 }) => Applications.getApplications(id, token, pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length === 5 ? allPages.length + 1 : undefined;
      },
      onError: (error) => {
        console.log('Failed to fetch applications:', error);
      },
      cacheTime: 60000
    }
  );
};
export default useGetApplicationQuery;
