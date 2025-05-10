import { useQuery } from '@tanstack/react-query';

import LoadingIndicator from '../components/UI/LoadingIndicator';
import ErrorBlock from '../components/UI/ErrorBlock';

import { fetchTeams } from '../api/teams';

import Section from '../components/Section';
import Container from '../components/Container';
import Title from '../components/Title';

import DataList from '../components/DataList';

const Teams = () => {
  // const { data, isPending, isError, error } = useQuery({
  //   queryKey: ['countries'],
  //   queryFn: fetchCountries,
  // });

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['teams'],
    queryFn: fetchTeams,
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
      <>
        <DataList dataList={data}></DataList>
      </>
    );
  }

  return (
    <Section>
      <Container>
        <Title title='Selecione seus times de futebol' />
        <div>
          <p>Selecione o(s) time(s) favoritos</p>
          <div>{content}</div>
        </div>
        <div className='mt-4'>
          <p>Time(s) favorito(s)</p>
        </div>
      </Container>
    </Section>
  );
};

export default Teams;
