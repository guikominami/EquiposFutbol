import { useState } from 'react';

import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import ListFavoriteTeams from '../components/Teams/ListFavoriteTeams';
import TeamEvents from '../components/Teams/TeamEvents';

const Events = () => {
  const [teamIdSelected, setTeamIdSelected] = useState<number>(0);
  const [openTeamEvents, setOpenTeamEvents] = useState<boolean>(false);

  //MUDAR PARA UM USE CONTEXT COM O ID
  let userId = localStorage.getItem('userId');
  const userName = localStorage.getItem('userName');

  if (userId == null || userName == null) {
    console.log('Não foi possível encontrar o id ou nome do usuário.');
    userId = '';
  }

  //AQUI POSSO SUbstituir o favorite tema pelo team recebendo apenas 1 parametro transformando em numbero
  function handleListClick(favoriteTeamid: string, teamId: number) {
    console.log(teamId);
    setTeamIdSelected(teamId);
    setOpenTeamEvents((state) => !state);
  }

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
        {openTeamEvents && (
          <TeamEvents teamId={teamIdSelected} isOpen={openTeamEvents} />
        )}
      </Container>
    </Section>
  );
};

export default Events;
