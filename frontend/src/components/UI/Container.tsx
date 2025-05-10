import React, { type ReactNode } from 'react';

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      className='
        flex flex-col 
        md:flex-row md:px-2 md:py-2
        container px-6 py-4 mx-auto
      '
    >
      {children}
    </div>
  );
};

export default Container;
