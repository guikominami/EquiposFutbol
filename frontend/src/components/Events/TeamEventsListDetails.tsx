import ParagraphList from '../UI/ParagraphList';
import { TbListDetails } from 'react-icons/tb';

const TeamEventsListDetails: React.FC<{
  teamHome: string;
  teamAway: string;
  leagueName: string;
  contry: string;
  open: boolean;
}> = ({ teamHome, teamAway, leagueName, contry, open }) => {
  return (
    <>
      {open && (
        <div>
          <ParagraphList description='Liga:' value={leagueName} />
          <div className='flex flex-row'>
            <ParagraphList description='Time da casa:' value={teamHome} />
            <button className='ml-4'>
              <TbListDetails />
            </button>
          </div>

          <ParagraphList description='Time de fora:' value={teamAway} />
          <ParagraphList description='Local:' value={contry} />
        </div>
      )}
    </>
  );
};

export default TeamEventsListDetails;
