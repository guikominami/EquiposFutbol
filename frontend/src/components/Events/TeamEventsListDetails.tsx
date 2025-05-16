import { useState } from 'react';

import TeamAwayDetail from './TeamAwayDetail';

import ParagraphList from '../UI/ParagraphList';
import ButtonTeamDetail from '../UI/ButtonTeamDetail';

const TeamEventsListDetails: React.FC<{
  teamHome: string;
  teamAway: string;
  leagueName: string;
  contry: string;
  open: boolean;
  teamAwayId: number;
  teamHomeId: number;
  favoriteTeamId: number;
}> = ({
  teamHome,
  teamAway,
  leagueName,
  contry,
  open,
  teamAwayId,
  teamHomeId,
  favoriteTeamId,
}) => {
  const [openDetails, setOpenDetails] = useState<boolean>(false);

  function handleButtonDetailClick() {
    setOpenDetails((state) => !state);
  }

  console.log('favoriteTeamId', favoriteTeamId);
  console.log('teamHomeId', teamHomeId);
  console.log('teamAwayId', teamAwayId);

  return (
    <>
      {open && (
        <div>
          <ParagraphList description='Liga:' value={leagueName} />
          <div className='flex flex-row'>
            <ParagraphList description='Time da casa:' value={teamHome} />
            <ButtonTeamDetail
              onClick={handleButtonDetailClick}
              description='Time da casa:'
              value={teamHome}
            />
          </div>
          <div className='flex flex-row'>
            <ParagraphList description='Time de fora:' value={teamAway} />
          </div>
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
