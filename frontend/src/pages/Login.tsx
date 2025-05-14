import { useRef } from 'react';

import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import Subtitle from '../components/UI/Subtitle';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import { Link } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../components/Token';

import { authenticate } from '../api/authentication';

const Login = () => {
  const userEmail = useRef<HTMLInputElement | null>(null);
  const userPassword = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (userEmail.current!.value !== '' && userPassword.current!.value) {
      try {
        const responseAuth = await authenticate(
          userEmail.current!.value,
          userPassword.current!.value
        );

        const token: string = responseAuth.token;
        const userId: string = responseAuth.userId;
        const userName: string = responseAuth.userName;

        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('userName', userName);

        useToken(token);

        navigate('/events');
      } catch (error) {
        console.log(error);
        alert('Usuário ou senha inválidos.');
      }

      userEmail.current!.value = '';
      userPassword.current!.value = '';

      return;
    }
    alert('Digite usuário e senha!');
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
            <Input inputValue={userEmail} id='email' />
            <Subtitle message='Digite a sua senha:' />
            <Input inputValue={userPassword} id='senha' isPassword />
            <span className='mt-2 flex justify-between align-middle items-center'>
              <Link
                to='/user'
                className='cursor-default text-blue-600 underline'
              >
                Cadastro novo usuário
              </Link>
              <Button>Login</Button>
            </span>
          </form>
        </div>
      </Container>
    </Section>
  );
};

export default Login;
