import React, { type ReactNode } from 'react';

const ListContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='relative bg-black/1 h-84 overflow-y-auto'>
      <ul className='py-2 text-lg font-light divide-y-2 divide-gray-200 cursor-pointer'>
        {children}
      </ul>
    </div>
  );
};

export default ListContainer;
