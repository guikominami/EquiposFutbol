import React from 'react';

const ButtonTeamDetail: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className='ml-2 bg-yellow-200 px-2 border-1' onClick={onClick}>
      ?
    </button>
  );
};

export default ButtonTeamDetail;
