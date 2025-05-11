import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';

import AllTeams from '../components/Teams/AllTeams';
import FavoriteTeams from '../components/Teams/FavoriteTeams';

const Teams = () => {
  return (
    <Section>
      <Container>
        <Title title='Selecione seus times de futebol para criar a lista de favoritos:' />
        <AllTeams />
        <FavoriteTeams />
      </Container>
    </Section>
  );
};

export default Teams;
