import { useState } from 'react';

import TeamAwayDetail from './TeamAwayDetail';

import ParagraphList from '../UI/ParagraphList';

const TeamEventsListDetails: React.FC<{
  teamHome: string;
  teamAway: string;
  leagueName: string;
  contry: string;
  open: boolean;
  teamAwayId: number;
}> = ({ teamHome, teamAway, leagueName, contry, open, teamAwayId }) => {
  const [openDetails, setOpenDetails] = useState<boolean>(false);

  function handleButtonDetailClick() {
    setOpenDetails((state) => !state);
  }

  return (
    <>
      {open && (
        <div>
          <ParagraphList description='Liga:' value={leagueName} />
          <div className='flex flex-row'>
            <ParagraphList description='Time da casa:' value={teamHome} />
            <button
              className='ml-2 bg-yellow-200 px-2 border-1'
              onClick={handleButtonDetailClick}
            >
              ?
            </button>
          </div>

          <ParagraphList description='Time de fora:' value={teamAway} />
          <ParagraphList description='Local:' value={contry} />
          {openDetails && (
            <TeamAwayDetail
              teamAwayId={teamAwayId}
              onClosePage={handleButtonDetailClick}
            />
          )}
        </div>
      )}
    </>
  );
};

export default TeamEventsListDetails;
