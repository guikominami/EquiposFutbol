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
  teamAdversary: number;
  favoriteTeamId: number;
}> = ({
  teamHome,
  teamAway,
  leagueName,
  contry,
  open,
  teamAwayId,
  teamHomeId,
  teamAdversary,
  favoriteTeamId,
}) => {
  const [openDetails, setOpenDetails] = useState<boolean>(false);

  function handleButtonDetailClick() {
    setOpenDetails((state) => !state);
  }

  console.log('favoriteTeamId', favoriteTeamId);
  console.log('teamHomeId', teamHomeId);
  console.log('teamAwayId', teamAwayId);
  console.log('teamAdversary', teamAdversary);

  return (
    <>
      {open && (
        <div>
          <ParagraphList description='Liga:' value={leagueName} />
          <ButtonTeamDetail
            onClick={handleButtonDetailClick}
            description='Time da casa:'
            value={teamHome}
            enableButton={teamHomeId !== favoriteTeamId}
          />
          <ButtonTeamDetail
            onClick={handleButtonDetailClick}
            description='Time de fora:'
            value={teamAway}
            enableButton={teamAwayId !== favoriteTeamId}
          />
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
