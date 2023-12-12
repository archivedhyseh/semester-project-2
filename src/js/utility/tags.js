export function convertTags(input) {
  let tagsValue = input.value.toLowerCase();
  let tag = tagsValue.replace(/\s+/g, '');
  let arr = [];

  if (!(tag === '')) {
    tag.split(',').forEach((tag) => {
      if (tag.length >= 2 && !arr.includes(tag)) {
        arr.push(tag);
        console.log(arr);
      }
    });
  }

  return arr;
}
