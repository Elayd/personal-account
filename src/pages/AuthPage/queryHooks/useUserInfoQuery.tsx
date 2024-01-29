import { useQuery, UseQueryResult } from 'react-query';
import { userData } from '../api/api.ts';
import { IUserInfo } from '../types/types.ts';
import useUserStore from '../store/user.ts';

const useUserDataQuery = (): UseQueryResult<IUserInfo> => {
  const token = useUserStore((state) => state.user.accessToken);
  const id = useUserStore((state) => state.user.user.id);
  return useQuery(
    ['userData', id],
    () =>
      userData.getUserData(id, token).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      }),
    {
      onError: (error) => {
        console.log('Login failed:', error);
      },
      cacheTime: 60000
    }
  );
};

export default useUserDataQuery;
