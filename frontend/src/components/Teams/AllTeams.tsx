import { useState, useRef } from 'react';

import { useQuery } from '@tanstack/react-query';

import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';

import { fetchTeams } from '../../api/teams';
import { createNewFavoriteTeam } from '../../api/favoriteTeams';

import ListContainer from '../UI/ListContainer';
import ListItem from '../UI/ListItem';
import Subtitle from '../UI/Subtitle';

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
  }

  function handleListClick(id: number, item: string) {
    //incluir na lista de favoritos - update
    createNewFavoriteTeam({
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
      <ErrorBlock errorTitle={error.name} errorMessage={error.message} />
    );
  }

  if (data) {
    content = (
      <>
        <ListContainer message='Selecione o(s) time(s):'>
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
        </ListContainer>
      </>
    );
  }

  return (
    <div>
      <Subtitle message='Digite o nome de um país:' />
      <form
        defaultValue={''}
        id='search-form'
        className='flex flex-row items-center justify-between align-middle'
        onSubmit={handleSearchSubmit}
      >
        <input
          className='w-50 p-2 shadow outline outline-black/10'
          ref={searchElement}
        />
        <button
          className='rounded-xl p-2 m-2 shadow 
            outline outline-black/10 bg-black/10'
        >
          Pesquisar
        </button>
      </form>
      {content}
    </div>
  );
};

export default AllTeams;
