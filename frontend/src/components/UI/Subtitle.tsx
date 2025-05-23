import React from 'react';

const Subtitle: React.FC<{ message: string }> = ({ message }) => {
  return <p className='font-semibold mt-4 mb-2 text-lg'>{message}</p>;
};

export default Subtitle;
