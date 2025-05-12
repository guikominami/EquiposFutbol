import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import ListFavoriteTeams from '../components/Teams/ListFavoriteTeams';

import { fetchEvents } from '../api/events';

const Events = () => {
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

  let userId = localStorage.getItem('userId');
  const userName = localStorage.getItem('userName');

  if (userId == null || userName == null) {
    console.log('Não foi possível encontrar o id ou nome do usuário.');
    userId = '';
  }

  console.log(userName);

  return (
    <Section>
      <Container>
        <p className='mb-4'>
          Hola <b>{userName}</b> !
        </p>
        <Title title='Veja as próximas partidas dos seus times favoritos.' />
        <ListFavoriteTeams
          onClick={handleListClick}
          iconType='detalhe'
          userId={userId}
        />
      </Container>
    </Section>
  );
};

export default Events;
