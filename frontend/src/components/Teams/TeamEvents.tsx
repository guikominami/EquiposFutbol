import { useQuery } from '@tanstack/react-query';

import { fetchTeamNextEvents } from '../../api/teams';
import { AiOutlineClose } from 'react-icons/ai';

import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import Title from '../UI/Title';

const TeamEvents: React.FC<{
  teamId: number;
  isOpen: boolean;
}> = ({ teamId, isOpen }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['teamsEvents', { teamId }],
    // queryFn: ({ signal }) => fetchTeams(signal, searchTerm, searchType),
    queryFn: () => fetchTeamNextEvents(teamId),
  });

  let content;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        errorTitle=''
        errorMessage='Não foi possível encontrar eventos deste time.'
      />
    );
    console.log(error);
  }

  if (data != undefined && data.length > 0) {
    console.log(data[0]);

    content = (
      <div id='teamDetail' className='p-4'>
        <p>TeamId: {teamId}</p>
      </div>
    );
  }

  return (
    <>
      <aside
        className={`h-full fixed z-10 top-0 w-[100%] md:w-[20%] border-r bg-white 
                    duration-500 ease-in-out ${
                      isOpen ? 'left-0' : '-left-100'
                    }`}
      >
        <div className='flex px-4 mt-4 justify-end '>
          <AiOutlineClose size={30} />
        </div>

        <div className='p-6'>
          <Title title='Próximas partidas do time:' />
          <div className='mt-4'>{content}</div>
        </div>
      </aside>
    </>
  );
};

export default TeamEvents;
