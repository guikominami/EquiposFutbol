import { useRef, useContext } from 'react';
import { Link } from 'react-router';
import { useNavigate } from 'react-router-dom';

import Section from '../components/UI/Section';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import Subtitle from '../components/UI/Subtitle';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

import { authenticate } from '../api/authentication';

import { UserDataContext } from '../context/user.context';

const Login = () => {
  const userEmail = useRef<HTMLInputElement | null>(null);
  const userPassword = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const { setUserCredentials } = useContext(UserDataContext);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (userEmail.current!.value !== '' && userPassword.current!.value) {
      try {
        const responseAuth = await authenticate(
          userEmail.current!.value,
          userPassword.current!.value
        );

        setUserCredentials(responseAuth);

        navigate('/events');
      } catch (error) {
        console.log(error);
        alert('Correo de usuario o contraseña no válidos.');
      }

      userEmail.current!.value = '';
      userPassword.current!.value = '';

      return;
    }
    alert('Ingrese su nombre de usuario y contraseña!');
  }

  return (
    <Section>
      <Container>
        <Title title='Inicie sesión' />
        <div>
          <form
            defaultValue={''}
            id='search-form'
            className='flex flex-col justify-start align-middle'
            onSubmit={handleSubmit}
          >
            <Subtitle message='Introduce tu correo electrónico:' />
            <Input inputValue={userEmail} id='email' />
            <Subtitle message='Introduce tua senha:' />
            <Input inputValue={userPassword} id='senha' isPassword />
            <span className='mt-2 flex justify-between align-middle items-center'>
              <Link
                to='/user'
                className='cursor-default text-blue-600 underline'
              >
                Registro de nuevo usuario
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
