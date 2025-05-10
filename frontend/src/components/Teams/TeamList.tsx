import type { Team } from '../../models/models';

import ListContainer from '../UI/ListContainer';

const TeamList: React.FC<{
  dataList: Team[];
  onListClick: (id: number, name: string) => void;
}> = ({ dataList, onListClick }) => {
  return (
    <ListContainer>
      {dataList.map((item) => (
        <li
          className='
            rounded-xl p-2 m-2 shadow 
            outline outline-black/10
            dark:-outline-offset
            transition delay-150 
            duration-300 ease-in-out  
          hover:bg-gray-100 active:bg-gray-100
          '
          key={item._id}
          onClick={() => onListClick(item._id, item.name)}
        >
          {item.name}
        </li>
      ))}
    </ListContainer>
  );
};

export default TeamList;
