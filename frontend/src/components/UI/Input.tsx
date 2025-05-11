import React, { type Ref } from 'react';

const Input: React.FC<{ searchElement: Ref<HTMLInputElement> }> = ({
  searchElement,
}) => {
  return (
    <input
      className='w-[50%] p-2 mr-2 shadow outline outline-black/10'
      ref={searchElement}
    />
  );
};

export default Input;
