import React, { useRef } from 'react';
import Subtitle from '../UI/Subtitle';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { IoSearch } from 'react-icons/io5';

interface FormElements extends HTMLFormControlsCollection {
  inputId: HTMLInputElement;
}
interface SearchFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const Form = ({
  onSubmit,
  message,
}: {
  onSubmit: (search: string) => void;
  message: string;
}) => {
  const inputValueRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(event: React.FormEvent<SearchFormElement>) {
    event.preventDefault();
    onSubmit(event.currentTarget.elements.inputId.value);

    inputValueRef.current!.value = '';
  }

  return (
    <div>
      <Subtitle message={message} />
      <form
        onSubmit={handleSubmit}
        className='flex flex-row items-center justify-start align-middle'
      >
        <Input id='inputId' inputValue={inputValueRef} />
        <Button>
          <IoSearch />
        </Button>
      </form>
    </div>
  );
};

export default Form;
