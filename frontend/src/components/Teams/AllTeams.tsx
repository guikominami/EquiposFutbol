import { useQuery } from '@tanstack/react-query';

import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';

import { fetchTeams } from '../../api/teams';
import { createNewFavoriteTeam } from '../../api/favoriteTeams';

import ListContainer from '../UI/ListContainer';
import ListItem from '../UI/ListItem';

const AllTeams = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['teams'],
    queryFn: fetchTeams,
  });

  function handleListClick(id: number, item: string) {
    //incluir na lista de favoritos - update
    createNewFavoriteTeam({
      name: item,
      teamId: id,
      userId: '681f474ca0f85a9a33e5057a',
    });
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
        <p className='mb-2'>Selecione o(s) time(s)</p>
        <ListContainer>
          {data
            .sort((a, b) => a.team.name.localeCompare(b.team.name))
            .map((item) => (
              <ListItem
                key={item.team.id}
                id={item.team.id}
                item={item.team.name}
                onListClick={() =>
                  handleListClick(item.team.id, item.team.name)
                }
                hasButton={false}
              />
            ))}
        </ListContainer>
      </>
    );
  }

  return <div>{content}</div>;
};

export default AllTeams;
