import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import LoadingIndicator from '../components/UI/LoadingIndicator';
import ErrorBlock from '../components/UI/ErrorBlock';
import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import ListFavoriteTeams from '../components/Teams/ListFavoriteTeams';

import { fetchEvents } from '../api/events';

const Events = () => {
  const [searchTeam, setSearchTeam] = useState<string>('');

  const { data, isLoading, isError, error } = useQuery({
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

  let content;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock errorTitle={error.name} errorMessage={error.message} />
    );
  }

  if (data != undefined && data.length == 0) {
    content = (
      <div className='mt-4'>
        <p>Você ainda não tem times favoritos.</p>
      </div>
    );
  }

  if (data != undefined && data.length > 0) {
    content = (
      <>
        <Title title='Veja as próximas partidas dos seus times favoritos.' />
        <ListFavoriteTeams
          onClick={handleListClick}
          iconType='detalhe'
          userId={userId}
        />
      </>
    );
  }

  return (
    <Section>
      <Container>
        <p className='mb-4'>
          Hola <b>{userName}</b> !
        </p>
        {content}
      </Container>
    </Section>
  );
};

export default Events;
