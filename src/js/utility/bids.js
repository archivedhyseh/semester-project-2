export function getHighestBid(arr) {
  let sorted = arr.sort((a, b) => b.amount - a.amount);
  return sorted[0];
}
