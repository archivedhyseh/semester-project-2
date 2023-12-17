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

  switch (value) {
    case 6:
    case 12:
    case 24:
    case 48:
    case 128:
    case 336:
      today.setHours(today.getHours() + value);
      date = new Date(today).toISOString();
  }

  return date;
}
