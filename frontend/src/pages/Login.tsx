import { useState, useRef } from 'react';

import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import Subtitle from '../components/UI/Subtitle';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import { Link } from 'react-router';

import { authenticate } from '../api/authentication';
import type { Token } from '../models/models';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const userEmail = useRef<HTMLInputElement | null>(null);
  const userPassword = useRef<HTMLInputElement | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (userEmail.current!.value !== '' && userPassword.current!.value) {
      console.log('userEmail', userEmail.current!.value);
      console.log('userPassword', userPassword.current!.value);

      const token: Promise<Token> = authenticate(
        userEmail.current!.value,
        userPassword.current!.value
      );

      if (token) {
        setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
        console.log(token);
      }

      userEmail.current!.value = '';
      userPassword.current!.value = '';

      return;
    }
    alert('please provide a valid input');
  }

  return (
    <Section>
      <Container>
        <Title title='Efetue o login' />
        <div>
          <form
            defaultValue={''}
            id='search-form'
            className='flex flex-col justify-start align-middle'
            onSubmit={handleSubmit}
          >
            <Subtitle message='Digite o seu nome:' />
            <Input inputValue={userEmail} inputId='email' />
            <Subtitle message='Digite a sua senha:' />
            <Input inputValue={userPassword} inputId='senha' isPassword />
            <span className='mt-2 flex justify-between align-middle items-center'>
              <Link to='/user' className='cursor-default'>
                Cadastro novo usuário
              </Link>
              <Button>
                {isLogin && <Link to='/' className='cursor-default' />}
                Login
              </Button>
            </span>
          </form>
        </div>
      </Container>
    </Section>
  );
};

export default Login;
