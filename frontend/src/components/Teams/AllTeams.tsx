import { useState, useRef } from 'react';

import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '../../api/teams';

import { fetchTeams } from '../../api/teams';
import { createNewFavoriteTeam } from '../../api/teams';

// import ListContainer from '../UI/ListContainer';
// import ListItem from '../UI/ListItem';
import Subtitle from '../UI/Subtitle';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import Button from '../UI/Button';
import Input from '../UI/Input';
import ListAllTeams from './ListAllTeams';

import { IoSearch } from 'react-icons/io5';

const AllTeams = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const searchElement = useRef<HTMLInputElement | null>(null);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['teams', { searchTerm }],
    queryFn: ({ signal }) => fetchTeams({ signal, searchTerm }),
    enabled: searchTerm !== '',
  });

  function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

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
      userId: '681f474ca0f85a9a33e5057a',
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
  }

  if (data != undefined && data.length > 0) {
    content = (
      <>
        <ListAllTeams data={data} onListClick={handleListClick} />
        {/* <ListContainer message='Selecione o(s) time(s):'>
          {data
            .sort((a, b) => a.team.name.localeCompare(b.team.name))
            .map((item) => (
              <ListItem
                key={item.team.id}
                id={item.team.id}
                item={item.team.name}
                onListClick={() =>
                  handleListClick(item.team.id, item.team.name)
                }
                hasButton={false}
              />
            ))}
        </ListContainer> */}
      </>
    );
  }

  return (
    <div>
      <Subtitle message='Digite o nome de um país:' />
      <form
        defaultValue={''}
        id='search-form'
        className='flex flex-row items-center justify-start align-middle'
        onSubmit={handleSearchSubmit}
      >
        <Input searchElement={searchElement} />
        <Button>
          <IoSearch />
        </Button>
      </form>
      {content}
    </div>
  );
};

export default AllTeams;
