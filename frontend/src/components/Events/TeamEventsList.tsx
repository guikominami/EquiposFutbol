import type { EventsTeam } from '../../models/eventsModels';

const TeamEventsList: React.FC<{ data: EventsTeam[] }> = ({ data }) => {
  console.log(data);

  return (
    <ul>
      {data.map((event) => (
        <li>{event.fixture.date}</li>
      ))}
    </ul>
  );
};

export default TeamEventsList;
