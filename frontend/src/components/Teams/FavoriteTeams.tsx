import { fetchFavoriteTeams } from '../../api/favoriteTeams';
import TeamData from './TeamData';

// "681f474ca0f85a9a33e5057a"

const FavoriteTeams = () => {
  function handleFavoriteListClick() {
    console.log('teste');
  }

  return (
    <TeamData
      queryFunctionName={() => fetchFavoriteTeams('681f474ca0f85a9a33e5057a')}
      queryName='favoriteTeams'
      onListClick={handleFavoriteListClick}
    />
  );
};

export default FavoriteTeams;
