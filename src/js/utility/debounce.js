export function debounce(callback, delay = 1000) {
  let timeout;

  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      callback();
    }, delay);
  };
}
