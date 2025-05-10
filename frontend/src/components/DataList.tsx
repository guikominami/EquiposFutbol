import React, { useState } from 'react';
import type { Team } from '../models/models';

const DataList: React.FC<{
  dataList: Team[];
}> = ({ dataList }) => {
  const [selectedTeamsId, setSelectedTeamsId] = useState<
    Array<{
      teamId: number;
      teamName: string;
    }>
  >([]);

  console.log('selectedTeamsId', selectedTeamsId);

  function handleListClick(idSelected: number, nameSelected: string) {
    setSelectedTeamsId((curTeamsId) => [
      ...curTeamsId,
      { teamId: idSelected, teamName: nameSelected },
    ]);
  }

  return (
    <div className='mt-4 outline outline-gray-200 rounded-2xl md:mt-6 md:w-[50%]'>
      <ul className='py-2 text-lg font-light divide-y-2 divide-gray-200 cursor-pointer'>
        {dataList.map((item) => (
          <li
            className='rounded-xl p-2 m-2 shadow 
                        outline outline-black/10
                        dark:-outline-offset-1
                        transition delay-150 
                        duration-300 ease-in-out  
                      hover:bg-gray-100 active:bg-gray-100'
            key={item._id}
            onClick={() => handleListClick(item._id, item.name)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
