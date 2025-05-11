import React, { type ReactNode } from 'react';

const Button: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <button
      className='rounded-xl p-2 m-2 shadow 
            outline outline-black/10 bg-black/10'
    >
      {children}
    </button>
  );
};

export default Button;
