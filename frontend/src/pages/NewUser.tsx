import { useRef } from 'react';

import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import Subtitle from '../components/UI/Subtitle';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

import { createNewUser } from '../api/users';

import { Link } from 'react-router';
import type { User } from '../models/userModels';

const NewUser = () => {
  const userName = useRef<HTMLInputElement | null>(null);
  const userEmail = useRef<HTMLInputElement | null>(null);
  const userPassword = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //setSearchTerm(searchElement.current!.value);

    console.log('userName', userName.current!.value);
    console.log('userEmail', userEmail.current!.value);
    console.log('userPassword', userPassword.current!.value);

    const newUser: User = await createNewUser({
      name: userName.current!.value,
      email: userEmail.current!.value,
      password: userPassword.current!.value,
    });

    console.log(newUser);

    alert('Nuevo usuario registrado con éxito!');

    userName.current!.value = '';
    userEmail.current!.value = '';
    userPassword.current!.value = '';
  };

  return (
    <Section>
      <Container>
        <Title title='Registrar un nuevo usuario' />
        <div>
          <form
            defaultValue={''}
            id='search-form'
            className='flex flex-col justify-start align-middle'
            onSubmit={handleSubmit}
          >
            <Subtitle message='Introduce tu nombre:' />
            <Input inputValue={userName} id='name' />
            <Subtitle message='Introduce tu correo electrónico:' />
            <Input inputValue={userEmail} id='email' />
            <Subtitle message='Introduce tua senha:' />
            <Input inputValue={userPassword} id='senha' isPassword />
            <span className='mt-2 flex justify-between align-middle items-center'>
              <Link to='/' className='cursor-default text-blue-600 underline'>
                Ya tienes un usuario? Acceso.
              </Link>
              <Button>Guardar</Button>
            </span>
          </form>
        </div>
      </Container>
    </Section>
  );
};

export default NewUser;
