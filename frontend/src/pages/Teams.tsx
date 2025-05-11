import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../api/teams';

import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';

import AllTeams from '../components/Teams/AllTeams';
import ListFavoriteTeams from '../components/Teams/ListFavoriteTeams';
import { removeFavoriteTeam } from '../api/teams';

const Teams = () => {
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
        <ListFavoriteTeams onClick={handleListClick} iconType='X' />
      </Container>
    </Section>
  );
};

export default Teams;
