import { useQuery, UseQueryResult } from 'react-query';
import { userData } from '../api/api.ts';
import useUserStore from '../store/user.ts';
import { PersonData } from '../../ProfilePage/types/types.ts';

const useUserDataQuery = (): UseQueryResult<PersonData> => {
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
        console.log('Failed to get user data:', error);
      },
      cacheTime: 60000
    }
  );
};

export default useUserDataQuery;
