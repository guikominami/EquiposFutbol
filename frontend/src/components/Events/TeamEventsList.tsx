import { useState } from 'react';

import { GoArrowDown } from 'react-icons/go';
import { GoArrowUp } from 'react-icons/go';

import type { EventsTeam } from '../../models/eventsModels';
import ParagraphList from '../UI/ParagraphList';

import TeamEventsListDetails from './TeamEventsListDetails';

const TeamEventsList: React.FC<{
  data: EventsTeam[];
  favoriteTeamId: number;
}> = ({ data, favoriteTeamId }) => {
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [indexDetail, setIndexDetail] = useState<number>();

  function handleListDetailClick(index: number) {
    setOpenDetails((state) => !state);
    setIndexDetail(index);
  }

  return (
    <ul className='mt-4 scroll-auto w-fit md:w-[100%]'>
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
              <div
                className={
                  openDetails && index === indexDetail
                    ? 'flex self-start'
                    : 'flex self-end'
                }
              >
                <button onClick={() => handleListDetailClick(index)}>
                  {openDetails && index === indexDetail ? (
                    <GoArrowUp />
                  ) : (
                    <GoArrowDown />
                  )}
                </button>
              </div>
            </div>
            <div>
              {openDetails && index === indexDetail && (
                <TeamEventsListDetails
                  leagueName={event.league.name}
                  teamAway={event.teams.away.name}
                  teamHome={event.teams.home.name}
                  contry={`${event.fixture.venue.name} - ${event.fixture.venue.city}`}
                  open={openDetails}
                  teamAwayId={event.teams.away.id}
                  teamHomeId={event.teams.home.id}
                  teamAdversary={
                    event.teams.away.id === favoriteTeamId
                      ? event.teams.home.id
                      : event.teams.away.id
                  }
                  favoriteTeamId={favoriteTeamId}
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
