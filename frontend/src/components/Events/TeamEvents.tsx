import { useQuery } from '@tanstack/react-query';

import { fetchTeamNextEvents } from '../../api/teams';
import { AiOutlineClose } from 'react-icons/ai';

import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import Title from '../UI/Title';

import TeamEventsList from './TeamEventsList';
import type { FavoriteTeam } from '../../models/teamModels';

const TeamEvents: React.FC<{
  favoriteTeam: FavoriteTeam;
  isOpen: boolean;
  onClosePage: () => void;
}> = ({ favoriteTeam, isOpen, onClosePage }) => {
  const teamId = favoriteTeam.teamId;
  const teamName = favoriteTeam.name;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['teamsEvents', { teamId }],
    queryFn: ({ signal }) => fetchTeamNextEvents(signal, teamId),
  });

  let content;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError || (data != undefined && data.length == 0)) {
    content = (
      <ErrorBlock
        errorTitle=''
        errorMessage='Não foi possível encontrar eventos deste time. Tente mais tarde.'
      />
    );
    console.log(error);
  }

  if (data != undefined && data.length > 0) {
    content = <TeamEventsList data={data} />;
  }

  return (
    <>
      <aside
        className={`h-full absolute z-0 top-19 w-[100%] md:w-[20%] border-r bg-white 
                    duration-500 ease-in-out ${
                      isOpen ? 'right-0' : '-right-100'
                    }`}
      >
        <div className='flex px-4 mt-4 justify-end '>
          <AiOutlineClose size={30} onClick={onClosePage} />
        </div>

        <div className='p-6'>
          <Title title={`Próximas partidas do ${teamName}`} />
          <div>{content}</div>
        </div>
      </aside>
    </>
  );
};

export default TeamEvents;
