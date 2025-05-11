import React from 'react';

const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <h1 className='font-bold text-[1rem] uppercase mb-1'>{title}</h1>
    </>
  );
};

export default Title;
