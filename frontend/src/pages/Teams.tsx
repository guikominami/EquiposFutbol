import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';

import AllTeams from '../components/Teams/AllTeams';
import FavoriteTeams from '../components/Teams/FavoriteTeams';

const Teams = () => {
  return (
    <Section>
      <Container>
        <Title title='Selecione seus times de futebol' />
        <div>
          <p>Selecione o(s) time(s) favoritos</p>
          <AllTeams />
        </div>
        <div className='mt-4'>
          <p>Time(s) favoritos</p>
          <FavoriteTeams />
        </div>
      </Container>
    </Section>
  );
};

export default Teams;
