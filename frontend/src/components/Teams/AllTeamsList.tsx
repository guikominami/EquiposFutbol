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
  const { mutate } = useMutation({
    mutationFn: createNewFavoriteTeam,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  function handleListClick(id: number, item: string) {
    mutate({
      name: item,
      teamId: id,
      userId: userId,
    });
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
