import { useQuery } from '@tanstack/react-query';

import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';

import ListContainer from '../UI/ListContainer';
import ListItem from '../UI/ListItem';

import { fetchFavoriteTeams } from '../../api/teams';

// "6821075b6d96682b5b219894"

const ListFavoriteTeams: React.FC<{
  onClick: (id: string) => void;
  iconType: string;
}> = ({ onClick, iconType }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['favoriteTeams'],
    queryFn: () => fetchFavoriteTeams('682121f2f2f1da77066d485b'),
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

  if (data != undefined && data.length > 0) {
    content = (
      <>
        <ListContainer message='Seus time(s) favorito(s):'>
          {data.map((team) => (
            <ListItem
              key={team._id}
              id={team._id}
              item={team.name}
              onListClick={() => onClick(team._id)}
              hasButton={true}
              iconType={iconType}
            />
          ))}
        </ListContainer>
      </>
    );
  }

  return <div>{content}</div>;
};

export default ListFavoriteTeams;
