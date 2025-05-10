import React, { type ReactNode } from 'react';

const ListContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='flex flex-col md:px-30 md:py-4'>
      <ul className='py-2 text-lg font-light divide-y-2 divide-gray-200 cursor-pointer'>
        {children}
      </ul>
    </div>
  );
};

export default ListContainer;
