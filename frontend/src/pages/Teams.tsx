import { useQuery } from '@tanstack/react-query';

import LoadingIndicator from '../components/UI/LoadingIndicator';
import ErrorBlock from '../components/UI/ErrorBlock';

import { fetchCountries } from '../api/countries';

import Section from '../components/Section';
import Container from '../components/Container';
import Title from '../components/Title';

const Teams = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
  });

  console.log('page', data);

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock errorTitle={error.name} errorMessage={error.message} />
    );
  }

  if (data) {
    content = (
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <Section>
      <Container>
        <Title title='Selecione seus times de futebol' />
        <p>Selecione o país</p>
        <div>{content}</div>
        <p>Selecione o(s) time(s)</p>
      </Container>
    </Section>
  );
};

export default Teams;
