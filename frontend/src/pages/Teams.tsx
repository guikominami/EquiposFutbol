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
        <div>
          <p>Selecione o(s) time(s)</p>
          <AllTeams />
        </div>
        <div className='mt-4'>
          <p>Seus time(s) favorito(s)</p>
          <FavoriteTeams />
        </div>
      </Container>
    </Section>
  );
};

export default Teams;
