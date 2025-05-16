import { useQuery } from '@tanstack/react-query';

import Title from '../UI/Title';
import ParagraphList from '../UI/ParagraphList';
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
  });

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
    content = (
      <div className='flex flex-row'>
        <div className='flex flex-col w-[80%]'>
          <ParagraphList description='Nombre:' value={data[0].team.name} />
          <ParagraphList description='Codigo:' value={data[0].team.code} />
          <ParagraphList description='Cidade:' value={data[0].venue.city} />

          <ParagraphList description='Goals: ' value='' />
        </div>
        <div>
          <img className='w-10 md:w-30' src={data[0].team.logo} alt='' />
        </div>
      </div>
    );
  }

  return (
    <div
      className='
        h-full fixed z-0 
        top-18 left-0 w-[100%]  
        bg-black/80
      '
    >
      <div className='bg-white flex flex-col p-4 my-10 mx-10 md:p-20 md:w-[60%] md:m-30 md:ml-90'>
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
