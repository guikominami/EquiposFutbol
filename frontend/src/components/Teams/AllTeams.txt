import { useState } from 'react';

import TeamData from './TeamData';

import { fetchTeams } from '../../api/teams';

const AllTeams = () => {
  const [selectedTeamsId, setSelectedTeamsId] = useState<
    Array<{
      teamId: number;
      teamName: string;
    }>
  >([]);

  console.log('selectedTeamsId', selectedTeamsId);

  function handleListClick(idSelected: number, nameSelected: string) {
    console.log('all teams');
    setSelectedTeamsId((curTeamsId) => [
      ...curTeamsId,
      { teamId: idSelected, teamName: nameSelected },
    ]);
  }

  return (
    <TeamData
      queryFunctionName={fetchTeams}
      queryName='teams'
      onListClick={handleListClick}
    />
  );
};

export default AllTeams;
