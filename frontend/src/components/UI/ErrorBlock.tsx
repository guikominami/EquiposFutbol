import React from 'react';

const ErrorBlock: React.FC<{ errorTitle: string; errorMessage: string }> = ({
  errorTitle,
  errorMessage,
}) => {
  return (
    <div>
      <h1>{errorTitle}</h1>
      <p className='text-amber-700'>{errorMessage}</p>
    </div>
  );
};

export default ErrorBlock;
