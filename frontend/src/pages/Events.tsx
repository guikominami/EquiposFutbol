import { useState } from 'react';

import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import FavoriteTeamsList from '../components/Teams/FavoriteTeamsList';
import TeamEvents from '../components/Events/TeamEvents';

import { GetUserCredentials } from '../components/Auth/UserCredentials';
import type { FavoriteTeam } from '../models/teamModels';

const Events = () => {
  const [favoriteTeam, setFavoriteTeam] = useState<FavoriteTeam>();
  const [openTeamEvents, setOpenTeamEvents] = useState<boolean>(false);

  const { userName } = GetUserCredentials();

  function handleListClick(favoriteTeam: FavoriteTeam) {
    setFavoriteTeam(favoriteTeam);
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
        <Title title='Mira los próximos partidos de tus equipos favoritos.' />
        <FavoriteTeamsList onClick={handleListClick} iconType='detalhe' />
        {openTeamEvents && favoriteTeam != undefined && (
          <TeamEvents
            favoriteTeam={favoriteTeam}
            isOpen={openTeamEvents}
            onClosePage={handleClosePage}
          />
        )}
      </Container>
    </Section>
  );
};

export default Events;
