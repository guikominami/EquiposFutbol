import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { FavoriteTeamsDataContext } from '../../context/favoriteTeams.context';

import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import ListContainer from '../UI/ListContainer';
import ListItem from '../UI/ListItem';

import { fetchFavoriteTeams } from '../../api/teams';
import type { FavoriteTeam } from '../../models/teamModels';
import { GetUserCredentials } from '../Auth/UserCredentials';

const FavoriteTeamsList: React.FC<{
  onClick: (team: FavoriteTeam) => void;
  iconType: string;
}> = ({ onClick, iconType }) => {
  const { userId } = GetUserCredentials();

  const { setQtdFavoriteTeams } = useContext(FavoriteTeamsDataContext);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['favoriteTeams'],
    queryFn: ({ signal }) => fetchFavoriteTeams(signal, userId),
    staleTime: 5000,
  });

  let content;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock errorTitle={error.name} errorMessage={error.message} />
    );
  }

  if (data == undefined || data.length == 0) {
    content = (
      <div className='mt-4'>
        <p>Você ainda não tem times favoritos.</p>
      </div>
    );
  }

  if (data != undefined && data.length > 0) {
    content = (
      <ListContainer message='Seus time(s) favorito(s):'>
        {data.map((team) => (
          <ListItem
            key={team._id}
            id={team._id}
            item={team.name}
            onListClick={() => onClick(team)}
            hasButton={true}
            iconType={iconType}
          />
        ))}
      </ListContainer>
    );

    setQtdFavoriteTeams(data.length);
  }

  return <div>{content}</div>;
};

export default FavoriteTeamsList;
