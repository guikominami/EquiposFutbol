import React, { type Ref } from 'react';

const Input: React.FC<{
  inputValue: Ref<HTMLInputElement>;
  inputId: string;
  isPassword?: boolean;
}> = ({ inputValue, inputId, isPassword }) => {
  return (
    <input
      id={inputId}
      className='w-[100%] p-2 mr-2 shadow outline outline-black/10'
      ref={inputValue}
      type={isPassword ? 'password' : 'text'}
    />
  );
};

export default Input;
