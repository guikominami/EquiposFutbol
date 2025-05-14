import { useQuery } from '@tanstack/react-query';

import { fetchTeamNextEvents } from '../../api/teams';
import { AiOutlineClose } from 'react-icons/ai';

import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import Title from '../UI/Title';

import TeamEventsList from './TeamEventsList';

const TeamEvents: React.FC<{
  teamId: number;
  isOpen: boolean;
  onClosePage: () => void;
}> = ({ teamId, isOpen, onClosePage }) => {
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
    content = (
      <div id='teamDetail' className='p-4'>
        <p>TeamId: {teamId}</p>
        <TeamEventsList data={data} />
      </div>
    );
  }

  return (
    <>
      <aside
        className={`h-full fixed z-10 top-0 w-[100%] md:w-[20%] border-r bg-white 
                    duration-500 ease-in-out ${
                      isOpen ? 'right-0' : '-right-100'
                    }`}
      >
        <div className='flex px-4 mt-4 justify-end '>
          <AiOutlineClose size={30} onClick={onClosePage} />
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
