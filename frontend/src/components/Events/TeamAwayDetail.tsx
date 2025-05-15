import Title from '../UI/Title';
import { AiOutlineClose } from 'react-icons/ai';

const TeamAwayDetail: React.FC<{
  teamAwayId: number;
  onClosePage: () => void;
}> = ({ teamAwayId, onClosePage }) => {
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
          <p>{teamAwayId}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamAwayDetail;
