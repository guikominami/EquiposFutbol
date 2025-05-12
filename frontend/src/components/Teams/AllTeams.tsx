import { useState, useRef } from 'react';

import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '../../api/teams';

import { fetchTeams } from '../../api/teams';
import { createNewFavoriteTeam } from '../../api/teams';

import Subtitle from '../UI/Subtitle';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import Button from '../UI/Button';
import Input from '../UI/Input';
import ListAllTeams from './ListAllTeams';

import { IoSearch } from 'react-icons/io5';

const AllTeams = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  let userId = localStorage.getItem('userId');

  if (userId == null) {
    console.log('Não foi possível encontrar o id ou nome do usuário.');
    userId = '';
  }

  const searchElement = useRef<HTMLInputElement | null>(null);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['teams', { searchTerm }],
    queryFn: ({ signal }) => fetchTeams({ signal, searchTerm }),
    enabled: searchTerm !== '',
  });

  function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(event.target.id);

    //CRIAR OBJETO search element com 2 parametros, o tipo de busca e o parametro de busca
    setSearchTerm(searchElement.current!.value);

    searchElement.current!.value = '';
  }

  const { mutate } = useMutation({
    mutationFn: createNewFavoriteTeam,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  function handleListClick(id: number, item: string) {
    mutate({
      name: item,
      teamId: id,
      userId: userId,
    });
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
    content = (
      <>
        <ListAllTeams data={data} onListClick={handleListClick} />
      </>
    );
  }

  //CRIAR UM COMPONENTE FORM TALVEZ
  return (
    <div>
      <div>
        <Subtitle message='Filtre pelo nome de um país:' />
        <form
          defaultValue={''}
          id='searchCountry'
          className='flex flex-row items-center justify-start align-middle'
          onSubmit={handleSearchSubmit}
        >
          <Input inputId='search' inputValue={searchElement} />
          <Button>
            <IoSearch />
          </Button>
        </form>
      </div>
      <div>
        <Subtitle message='Filtre pelo nome de um time:' />
        <form
          defaultValue={''}
          id='searchTeam'
          className='flex flex-row items-center justify-start align-middle'
          onSubmit={handleSearchSubmit}
        >
          <Input inputId='search' inputValue={searchElement} />
          <Button>
            <IoSearch />
          </Button>
        </form>
      </div>

      {content}
    </div>
  );
};

export default AllTeams;
