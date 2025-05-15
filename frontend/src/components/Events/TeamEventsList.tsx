import { useState } from 'react';

import { GoArrowDown } from 'react-icons/go';
import { GoArrowUp } from 'react-icons/go';

import type { EventsTeam } from '../../models/eventsModels';
import ParagraphList from '../UI/ParagraphList';

import TeamEventsListDetails from './TeamEventsListDetails';

const TeamEventsList: React.FC<{ data: EventsTeam[] }> = ({ data }) => {
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [indexDetail, setIndexDetail] = useState<number>();

  console.log(openDetails);

  function handleListDetailClick(index: number) {
    setOpenDetails((state) => !state);
    setIndexDetail(index);
  }

  return (
    <ul className='mt-4'>
      {data.map((event, index) => (
        <li className='p-4 bg-black/10 mb-2 border-b-2' key={index}>
          <div className='flex flex-col'>
            <div className='flex flex-row justify-between'>
              <div>
                <ParagraphList description='Data:' value={event.fixture.date} />
                <ParagraphList
                  description={`${event.teams.home.name} X ${event.teams.away.name}`}
                  value=''
                />
              </div>
              <div className='flex'>
                <button onClick={() => handleListDetailClick(index)}>
                  {openDetails ? <GoArrowUp /> : <GoArrowDown />}
                </button>
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
