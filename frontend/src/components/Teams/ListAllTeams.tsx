import ListContainer from '../UI/ListContainer';
import ListItem from '../UI/ListItem';
import { type TeamFull } from '../../models/models';

const ListAllTeams: React.FC<{
  data: TeamFull[];
  onListClick: (teamId: number, teamName: string) => void;
}> = ({ data, onListClick }) => {
  return (
    <ListContainer message='Selecione o(s) time(s):'>
      {data
        .sort((a, b) => a.team.name.localeCompare(b.team.name))
        .map((item) => (
          <ListItem
            key={item.team.id}
            id={item.team.id}
            item={item.team.name}
            onListClick={() => onListClick(item.team.id, item.team.name)}
            hasButton={false}
          />
        ))}
    </ListContainer>
  );
};

export default ListAllTeams;
