import React, { type ReactNode } from 'react';
import Subtitle from './Subtitle';

const ListContainer: React.FC<{ children: ReactNode; message: string }> = ({
  children,
  message,
}) => {
  return (
    <>
      <Subtitle message={message} />
      <div className='relative h-86 overflow-y-auto'>
        <ul className='py-2 text-lg font-light divide-y-2 divide-gray-200 cursor-pointer'>
          {children}
        </ul>
      </div>
    </>
  );
};

export default ListContainer;
