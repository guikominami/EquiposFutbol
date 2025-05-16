import { useQuery } from '@tanstack/react-query';

import Title from '../UI/Title';
import { AiOutlineClose } from 'react-icons/ai';

import { fetchTeams } from '../../api/teams';

import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';

const TeamAwayDetail: React.FC<{
  teamAwayId: number;
  onClosePage: () => void;
}> = ({ teamAwayId, onClosePage }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['teams'],
    queryFn: ({ signal }) => fetchTeams(signal, teamAwayId.toString(), 'id/'),
    staleTime: 5000,
  });

  //console
  console.log(teamAwayId);
  console.log(data);

  let content;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        errorTitle=''
        errorMessage='Não foi possível encontrar os dados do time adversário.'
      />
    );
    console.log(error);
  }

  if (data !== undefined && data.length > 0) {
    content = <div>data</div>;
  }

  return (
    <div
      className='
      h-full fixed z-0 
      top-18 left-0 w-[100%]  
      bg-black/80'
    >
      <div className='bg-white flex flex-col p-4 my-10 mx-10'>
        <div className='flex justify-end '>
          <AiOutlineClose size={30} onClick={onClosePage} />
        </div>
        <div>
          <Title title='Detalhes do time' />
          {content}
        </div>
      </div>
    </div>
  );
};

export default TeamAwayDetail;
