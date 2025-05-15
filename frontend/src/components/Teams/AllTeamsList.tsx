import { useContext } from 'react';
import { FavoriteTeamsDataContext } from '../../context/favoriteTeams.context';

import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../api/teams';
import { createNewFavoriteTeam } from '../../api/teams';

import ListContainer from '../UI/ListContainer';
import ListItem from '../UI/ListItem';
import { type TeamFull } from '../../models/teamModels';

const ListAllTeams: React.FC<{
  data: TeamFull[];
  userId: string;
}> = ({ data, userId }) => {
  const { qtdFavoriteTeams } = useContext(FavoriteTeamsDataContext);

  console.log('qtdFavoriteTeams', qtdFavoriteTeams);

  const { mutate, isError, error } = useMutation({
    mutationFn: createNewFavoriteTeam,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  function handleListClick(id: number, item: string) {
    if (qtdFavoriteTeams === 5) {
      alert('Não é possível cadastrar mais de 5 times favoritos.');
      return;
    }
    mutate({
      name: item,
      teamId: id,
      userId: userId,
    });
  }

  if (isError) {
    console.log(error['message']);
  }

  return (
    <ListContainer message='Selecione o(s) time(s):'>
      {data
        .sort((a, b) => a.team.name.localeCompare(b.team.name))
        .map((item) => (
          <ListItem
            key={item.team.id}
            id={item.team.id}
            item={item.team.name}
            onListClick={() => handleListClick(item.team.id, item.team.name)}
            hasButton={false}
          />
        ))}
    </ListContainer>
  );
};

export default ListAllTeams;
