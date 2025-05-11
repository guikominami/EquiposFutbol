import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';

import AllTeams from '../components/Teams/AllTeams';
import ListFavoriteTeams from '../components/Teams/ListFavoriteTeams';
import { removeFavoriteTeam } from '../api/favoriteTeams';

const Teams = () => {
  function handleListClick(favoriteTeamid: string) {
    removeFavoriteTeam(favoriteTeamid);
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
