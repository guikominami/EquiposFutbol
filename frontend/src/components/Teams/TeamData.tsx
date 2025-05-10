import { useQuery } from '@tanstack/react-query';

import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';

import TeamList from './TeamList';

const TeamData: React.FC<{
  queryName: string;
  queryFunctionName: () => void;
  onListClick: (id: number, name: string) => void;
}> = ({ queryName, queryFunctionName, onListClick }) => {
  // const { data, isPending, isError, error } = useQuery({
  //   queryKey: ['countries'],
  //   queryFn: fetchCountries,
  // });

  const { data, isPending, isError, error } = useQuery({
    queryKey: [{ queryName }],
    queryFn: queryFunctionName,
  });

  console.log('page', data);

  let content;

  if (isPending) {
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
        <TeamList dataList={data} onListClick={onListClick} />
      </>
    );
  }

  return <div>{content}</div>;
};

export default TeamData;
