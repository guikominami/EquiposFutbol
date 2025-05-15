import type { EventsTeam } from '../../models/eventsModels';

const TeamEventsList: React.FC<{ data: EventsTeam[] }> = ({ data }) => {
  console.log(data);

  return (
    <ul className=''>
      {data.map((event) => (
        <li className='p-4 bg-black/10 mb-2 border-b-2'>
          <p>{event.fixture.date}</p>
          <p>
            <b>Liga:</b> {event.league.name}
          </p>
          <p>
            <b>Time da casa: </b>
            {event.teams.home.name}
          </p>
          <p>
            <b>Time de fora: </b>
            {event.teams.away.name}
          </p>
          <p>
            <b>Local: </b>
            {event.fixture.venue.name} - {event.fixture.venue.city}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default TeamEventsList;
