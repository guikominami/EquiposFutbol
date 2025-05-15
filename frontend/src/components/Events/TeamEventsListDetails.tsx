import ParagraphList from '../UI/ParagraphList';
import type { FavoriteTeamEventDetails } from '../../models/eventsModels';

const TeamEventsListDetails: React.FC<FavoriteTeamEventDetails> = (
  eventDetails
) => {
  return (
    <div>
      <ParagraphList description='Liga:' value={eventDetails.leagueName} />
      <ParagraphList
        description='Time da casa:'
        value={eventDetails.homeTeam}
      />
      <ParagraphList
        description='Time de fora:'
        value={eventDetails.awayTeam}
      />
      <ParagraphList description='Local:' value={eventDetails.local} />
    </div>
  );
};

export default TeamEventsListDetails;
