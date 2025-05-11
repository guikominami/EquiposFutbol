import { useQuery } from '@tanstack/react-query';

import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';

import { fetchFavoriteTeams } from '../../api/favoriteTeams';

import ListContainer from '../UI/ListContainer';
import ListItem from '../UI/ListItem';

// "681f474ca0f85a9a33e5057a"

const FavoriteTeams = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['favoriteTeams'],
    queryFn: () => fetchFavoriteTeams('681f474ca0f85a9a33e5057a'),
  });

  function handleListClick(id: string, item: string) {
    //excluir
    console.log('id', id);
    console.log('item', item);
  }

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock errorTitle={error.name} errorMessage={error.message} />
    );
  }

  if (data) {
    content = (
      <>
        <p className='mt-4 mb-4'>Seus time(s) favorito(s)</p>
        <ListContainer>
          {data.map((team) => (
            <ListItem
              key={team._id}
              id={team._id}
              item={team.name}
              onListClick={() => handleListClick(team._id, team.name)}
            />
          ))}
        </ListContainer>
      </>
    );
  }

  return <div>{content}</div>;
};

export default FavoriteTeams;
