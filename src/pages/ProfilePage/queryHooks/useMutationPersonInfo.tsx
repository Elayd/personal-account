import { useMutation, useQueryClient } from 'react-query';
import { PersonData } from '../types/types.ts';
import useUserStore from '../../AuthPage/store/user.ts';
import { personInfo } from '../api/api.ts';

const useMutationPersonInfo = () => {
  const queryClient = useQueryClient();
  const id = useUserStore((state) => state.user.user.id);
  const token = useUserStore((state) => state.user.accessToken);
  return useMutation(
    (data: PersonData) =>
      personInfo.update(data, id, token).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      }),
    {
      onSettled: () => {
        queryClient.invalidateQueries(['userData']);
      },
      onError: (error) => {
        console.log('Failed to change personal data:', error);
      }
    }
  );
};

export default useMutationPersonInfo;
