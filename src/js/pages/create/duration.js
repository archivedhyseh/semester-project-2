export function getEndingDate(inputs) {
  const options = inputs;

  let value = undefined;
  let date;

  options.forEach((option) => {
    if (option.checked) {
      value = Number(option.value);
      date = getDuration(value);
    }
  });

  if (!(value === undefined)) {
    return String(date);
  } else {
    return undefined;
  }
}

function getDuration(value) {
  const today = new Date();
  let date;

  if (value === 6) {
    today.setHours(today.getHours() + value);
    date = new Date(today).toISOString();
  }

  if (value === 12) {
    today.setHours(today.getHours() + value);
    date = new Date(today).toISOString();
  }

  if (value === 24) {
    today.setHours(today.getHours() + value);
    date = new Date(today).toISOString();
  }

  if (value === 48) {
    today.setHours(today.getHours() + value);
    date = new Date(today).toISOString();
  }

  if (value === 168) {
    today.setHours(today.getHours() + value);
    date = new Date(today).toISOString();
  }

  if (value === 336) {
    today.setHours(today.getHours() + value);
    date = new Date(today).toISOString();
  }

  return date;
}
