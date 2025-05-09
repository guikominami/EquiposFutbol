const router = express.Router();
import getdata from '../utils/https';

const privateKey = config.get('privateKey');

router.get('/', async (req, res) => {
  var options = {
    method: 'get',
    headers: {
      'x-rapidapi-key': privateKey,
      'x-rapidapi-host': 'v3.football.api-sports.io',
    },
  };

  const data = await fetch(
    'https://v3.football.api-sports.io/countries?',
    options
  );

  res.json(data);
});
