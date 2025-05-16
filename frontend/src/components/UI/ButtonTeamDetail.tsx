import React from 'react';
import ParagraphList from './ParagraphList';
const ButtonTeamDetail: React.FC<{
  description: string;
  value: string;
  onClick: () => void;
  enableButton: boolean;
}> = ({ description, value, onClick, enableButton }) => {
  console.log(enableButton);
  return (
    <div className='flex flex-row'>
      <ParagraphList description={description} value={value} />
      {enableButton && (
        <button className='ml-2 bg-yellow-200 px-2 border-1' onClick={onClick}>
          ?
        </button>
      )}
    </div>
  );
};

export default ButtonTeamDetail;
