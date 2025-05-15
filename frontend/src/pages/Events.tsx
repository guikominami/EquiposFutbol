import { useState } from 'react';

import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import FavoriteTeamsList from '../components/Teams/FavoriteTeamsList';
import TeamEvents from '../components/Events/TeamEvents';

import { GetUserCredentials } from '../components/Auth/UserCredentials';

const Events = () => {
  const [teamIdSelected, setTeamIdSelected] = useState<number>(0);
  const [openTeamEvents, setOpenTeamEvents] = useState<boolean>(false);

  const { userName } = GetUserCredentials();

  //AQUI POSSO SUbstituir o favorite tema pelo team recebendo apenas 1 parametro transformando em numbero
  function handleListClick(favoriteTeamid: string, teamId: number) {
    setTeamIdSelected(teamId);
    setOpenTeamEvents((state) => !state);
  }

  function handleClosePage() {
    setOpenTeamEvents((state) => !state);
  }

  return (
    <Section>
      <Container>
        <p className='mb-4'>
          Hola <b>{userName}</b> !
        </p>
        <Title title='Veja as próximas partidas dos seus times favoritos.' />
        <FavoriteTeamsList onClick={handleListClick} iconType='detalhe' />
        {openTeamEvents && (
          <TeamEvents
            teamId={teamIdSelected}
            isOpen={openTeamEvents}
            onClosePage={handleClosePage}
          />
        )}
      </Container>
    </Section>
  );
};

export default Events;
