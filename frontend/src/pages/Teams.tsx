import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../api/teams';

import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';

import AllTeams from '../components/Teams/AllTeams';
import FavoriteTeamsList from '../components/Teams/FavoriteTeamsList';
import { removeFavoriteTeam } from '../api/teams';

import { useContext } from 'react';
import { UserDataContext } from '../context/user.context';
import type { FavoriteTeam } from '../models/teamModels';

const Teams = () => {
  const { userCredentials } = useContext(UserDataContext);

  let userId = userCredentials.userId;

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

  function handleListClick(favoriteTeam: FavoriteTeam) {
    mutate(favoriteTeam._id);
  }

  return (
    <Section>
      <Container>
        <Title title='Selecione seus times de futebol para criar a lista de favoritos:' />
        <AllTeams />
        <FavoriteTeamsList onClick={handleListClick} iconType='X' />
      </Container>
    </Section>
  );
};

export default Teams;
