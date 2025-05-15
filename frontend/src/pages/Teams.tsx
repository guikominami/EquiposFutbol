import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../api/teams';

import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';

import AllTeams from '../components/Teams/AllTeams';
import ListFavoriteTeams from '../components/Teams/FavoriteTeamsList';
import { removeFavoriteTeam } from '../api/teams';

import { useContext } from 'react';
import { UserDataContext } from '../context/user.context';

const Teams = () => {
  const { userCredentials } = useContext(UserDataContext);

  let userId = userCredentials.userId;

  console.log(userId);

  if (userId == null) {
    console.log('Não foi possível encontrar o id ou nome do usuário.');
    userId = '';
  }

  const { mutate } = useMutation({
    mutationFn: removeFavoriteTeam,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  function handleListClick(favoriteTeamid: string) {
    mutate(favoriteTeamid);
  }

  return (
    <Section>
      <Container>
        <Title title='Selecione seus times de futebol para criar a lista de favoritos:' />
        <AllTeams />
        <ListFavoriteTeams
          onClick={handleListClick}
          iconType='X'
          userId={userId}
        />
      </Container>
    </Section>
  );
};

export default Teams;
