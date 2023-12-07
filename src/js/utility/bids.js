export function getHighestBid(arr) {
  let sorted = arr.sort((a, b) => b.amount - a.amount);
  let highest;

  // if statement
  if (sorted.length <= 0) {
    highest = 'No current bids';
  } else {
    highest = `${sorted[0].amount} credits`;
  }

  // return
  return highest;
}
