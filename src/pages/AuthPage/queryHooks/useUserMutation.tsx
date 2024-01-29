import { useMutation } from 'react-query';
import useUserStore from '../store/user.ts';
import { authUser } from '../api/api.ts';
import { IMutateData, IUser } from '../types/types.ts';

const useUserMutation = () => {
  const { setUser, setIsLoggedIn } = useUserStore();

  return useMutation(
    (data: IMutateData) =>
      authUser.login(data).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      }),
    {
      onSuccess: (data: IUser) => {
        setUser(data);
        setIsLoggedIn(true);
      },
      onError: (error) => {
        console.log('Login failed:', error);
      }
    }
  );
};

export default useUserMutation;
