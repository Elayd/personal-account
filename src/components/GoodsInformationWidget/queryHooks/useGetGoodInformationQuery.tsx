import { useQuery, UseQueryResult } from 'react-query';
import useUserStore from '../../../pages/AuthPage/store/user.ts';
import { GoodsInformation } from '../api/api.ts';
import { useParams } from 'react-router-dom';
import { IGoodsInformation } from '../types/types.ts';

const useGetGoodInformationQuery = (): UseQueryResult<IGoodsInformation[]> => {
  const token = useUserStore((state) => state.user.accessToken);
  const id = useUserStore((state) => state.user.user.id);
  const { id: appId } = useParams();
  return useQuery(
    ['useGoodData', appId],
    () =>
      GoodsInformation.getGoodsInformationData(id, Number(appId), token).then((response) => {
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

export default useGetGoodInformationQuery;
