import { useQuery, UseQueryResult } from 'react-query';
import useUserStore from '../../../pages/AuthPage/store/user.ts';
import { useParams } from 'react-router-dom';
import { ArticleInformation } from '../api/api.ts';
import { IArticleInfo } from '../types/types.ts';

const useGetArticleInfoQuery = (): UseQueryResult<IArticleInfo[]> => {
  const token = useUserStore((state) => state.user.accessToken);
  const id = useUserStore((state) => state.user.user.id);
  const { id: appId } = useParams();
  return useQuery(
    ['useArticleData', appId],
    () =>
      ArticleInformation.getArticleInformation(id, Number(appId), token).then((response) => {
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

export default useGetArticleInfoQuery;
