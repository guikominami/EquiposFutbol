import React from 'react';
import { BiDetail } from 'react-icons/bi';

const ListItem: React.FC<{
  id: number | string;
  item: string;
  onListClick: (id: number | string, name: string) => void;
  hasButton: boolean;
  iconType?: string;
}> = ({ id, item, onListClick, hasButton, iconType }) => {
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
      <div className='flex justify-between'>
        {item}
        {hasButton && (
          <button className='mr-2 font-bold'>
            {iconType === 'detalhe' ? <BiDetail /> : iconType}
          </button>
        )}
      </div>
    </li>
  );
};

export default ListItem;
