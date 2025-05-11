import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import ListFavoriteTeams from '../components/Teams/ListFavoriteTeams';

const Home = () => {
  function handleListClick(favoriteTeamid: string) {
    console.log(favoriteTeamid);
  }

  return (
    <Section>
      <Container>
        <Title title='Veja as próximas partidas dos seus times favoritos.' />
        <ListFavoriteTeams onClick={handleListClick} iconType='detalhe' />
      </Container>
    </Section>
  );
};

export default Home;
