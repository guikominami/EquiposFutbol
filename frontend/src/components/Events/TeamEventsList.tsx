import { useState } from 'react';

import type { EventsTeam } from '../../models/eventsModels';
import ParagraphList from '../UI/ParagraphList';

import TeamEventsListDetails from './TeamEventsListDetails';

// value={new Intl.DateTimeFormat('en-GB', {
//   year: 'numeric',
//   month: 'long',
//   day: '2-digit',
// }).format(event.fixture.date)}

const TeamEventsList: React.FC<{ data: EventsTeam[] }> = ({ data }) => {
  const [openDetails, setOpenDetails] = useState<boolean>(false);

  console.log(openDetails);

  function handleListDetailClick() {
    setOpenDetails((state) => !state);
  }

  return (
    <ul className='mt-4'>
      {data.map((event, index) => (
        <li className='p-4 bg-black/10 mb-2 border-b-2' key={index}>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <div>
                <ParagraphList
                  description='Data:'
                  value={Date(event.fixture.date)}
                />
                <ParagraphList
                  description={`${event.teams.home.name} X ${event.teams.away.name}`}
                  value=''
                />
              </div>
              <div className='align-middle justify-center self-center'>
                <button onClick={handleListDetailClick}>X</button>
              </div>
            </div>
            <div>
              {openDetails && (
                <TeamEventsListDetails
                  awayTeam={event.teams.away.name}
                  homeTeam={event.teams.home.name}
                  leagueName={event.league.name}
                  local={event.league.country}
                />
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TeamEventsList;
