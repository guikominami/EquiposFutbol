import React from 'react';

const ParagraphList: React.FC<{ description: string; value: string }> = ({
  description,
  value,
}) => {
  return (
    <p className='md:text-lg'>
      <b>{description}</b> {value}
    </p>
  );
};

export default ParagraphList;
