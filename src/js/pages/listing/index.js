import { param } from '../../utility/params.js';
import { getListing } from '../../api/listings/listings.js';
import { renderListing } from '../../components/cards/listing/index.js';
import { placeBid } from './bids.js';

const id = param.get('id');

const listing = async (id) => {
  const data = await getListing(id);
  console.log(data);
  renderListing(data);
  placeBid(id);
};

listing(id);