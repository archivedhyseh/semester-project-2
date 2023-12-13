import { getProfile } from '../../api/profiles/profiles.js';
import { renderProfile } from '../../components/cards/profile/index.js';

const profile = async () => {
  const name = localStorage.getItem('name');
  const data = await getProfile(name);
  console.log(data);
  renderProfile(data);
};

profile();
