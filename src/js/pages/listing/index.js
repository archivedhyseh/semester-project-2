import { param } from '../../utility/params.js';
import { getListing } from '../../api/listings/listings.js';
import { renderError } from '../../components/errors.js';
import { renderListing } from '../../components/cards/listing/index.js';
import { placeBid } from './bids.js';

const id = param.get('id');

const listing = async (id) => {
  const data = await getListing(id);

  if (data.errors) {
    const section = document.querySelector('#listing-section');
    renderError(section);
  } else {
    const token = localStorage.getItem('token');
    renderListing(data);

    if (token) {
      const currentSeller = data.seller.name;
      const currentUser = localStorage.getItem('name');

      if (currentSeller !== currentUser) {
        placeBid(data);
      }
    }
  }
};

listing(id);
