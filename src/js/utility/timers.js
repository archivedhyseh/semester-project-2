export function timeDistance(date) {
  const current = new Date();
  const ending = new Date(date);
  let time;

  const diff = Math.floor(ending - current) / 1000;
  let ms = diff;

  const days = Math.floor(ms / 86400);
  ms -= days * 86400;
  const hours = Math.floor(ms / 3600) % 24;
  ms -= hours * 3600;
  const minutes = Math.floor(ms / 60) % 60;
  ms -= minutes * 60;
  const seconds = Math.floor(ms % 60);

  if (diff <= 0) {
    time = 'Auction ended';
  } else {
    time = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  return time;
}
