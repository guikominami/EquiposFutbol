import React, { type Ref } from 'react';

const Input: React.FC<{
  id: string;
  inputValue: Ref<HTMLInputElement>;
  isPassword?: boolean;
}> = ({ id, inputValue, isPassword }) => {
  return (
    <input
      id={id}
      className='w-[100%] p-2 mr-2 shadow outline outline-black/10'
      type={isPassword ? 'password' : 'text'}
      ref={inputValue}
    />
  );
};

export default Input;
