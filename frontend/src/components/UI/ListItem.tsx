import React from 'react';

const ListItem: React.FC<{
  id: string;
  item: string;

  onListClick: (id: string, name: string) => void;
}> = ({ id, item, onListClick }) => {
  return (
    <li
      className='
            rounded-xl p-2 m-2 shadow 
            outline outline-black/10
            dark:-outline-offset
            transition delay-150 
            duration-300 ease-in-out  
          hover:bg-gray-100 active:bg-gray-100
          '
      onClick={() => onListClick(id, item)}
    >
      <div className='flex justify-between'>{item}</div>
    </li>
  );
};

export default ListItem;
