import { useQuery, useMutation } from '@tanstack/react-query';

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
    staleTime: 5000,
  });

  const { mutate } = useMutation({
    mutationFn: createNewFavoriteTeam,
  });

  function handleListClick(id: number, item: string) {
    //incluir na lista de favoritos - update

    try {
      mutate({
        name: item,
        teamId: id,
        userId: '681f474ca0f85a9a33e5057a',
      });
      console.log('id', id);
      console.log('item', item);
    } catch (error) {
      console.log(error);
    }
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
        <p className='mb-4'>Selecione o(s) time(s)</p>
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
              />
            ))}
        </ListContainer>
      </>
    );
  }

  return <div>{content}</div>;
};

export default AllTeams;
