import React from 'react';

const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <h1
        className='
          font-bold text-[1rem] uppercase mb-1 
          md:text-2xl
        '
      >
        {title}
      </h1>
    </>
  );
};

export default Title;
