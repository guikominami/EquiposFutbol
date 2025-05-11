import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import ListFavoriteTeams from '../components/Teams/ListFavoriteTeams';

import { fetchEvents } from '../api/events';

const Home = () => {
  const [searchTeam, setSearchTeam] = useState<string>('');

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', { search: searchTeam }],
    queryFn: ({ signal }) => fetchEvents({ signal, searchTeam }),
  });

  function handleListClick(favoriteTeamid: string) {
    console.log(favoriteTeamid);
    setSearchTeam(favoriteTeamid);
  }

  console.log(data);

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
