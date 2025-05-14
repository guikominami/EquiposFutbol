import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchTeams } from '../../api/teams';

import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import ListAllTeams from './ListAllTeams';

import Form from './SearchTeamForm';

const AllTeams = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchType, setSearchType] = useState<string>('');

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['teams', { searchTerm }],
    // queryFn: ({ signal }) => fetchTeams(signal, searchTerm, searchType),
    queryFn: () => fetchTeams(searchTerm, searchType),
    enabled: searchTerm !== '',
  });

  let userId = localStorage.getItem('userId');

  console.log('userId', userId);

  if (userId == null) {
    console.log('Não foi possível encontrar o id ou nome do usuário.');
    userId = '';
  }

  let content;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        errorTitle=''
        errorMessage='Não foi possível encontrar times neste país.'
      />
    );
    console.log(error);
  }

  if (data != undefined && data.length > 0) {
    content = <ListAllTeams data={data} userId={userId} />;
  }

  function handleSearchTeam(searchTeam: string) {
    setSearchTerm(searchTeam);
    setSearchType('byteam/');
  }

  function handleSearchCountry(searchTeam: string) {
    setSearchTerm(searchTeam);
    setSearchType('bycountry/');
  }

  return (
    <div>
      <Form
        onSubmit={handleSearchTeam}
        message='Filtre pelo nome de um time:'
      />
      <Form
        onSubmit={handleSearchCountry}
        message='Filtre pelo nome de um país:'
      />
      {content}
    </div>
  );
};

export default AllTeams;
