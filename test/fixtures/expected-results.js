const arrayHeader = ['number', 'first', 'last', 'handle'];
const arrayContent = [
  [1, 'Mark', 'Otto', '@mdo'],
  [2, 'Jacob', 'Thornton', '@fat'],
  [3, 'Larry', 'the Bird', '@twitter'],
];
const objectContent = [
  {
    number: 1,
    first: 'Mark',
    last: 'Otto',
    handle: '@mdo',
  },
  {
    number: 2,
    first: 'Jacob',
    last: 'Thornton',
    handle: '@fat',
  },
  {
    number: 3,
    first: 'Larry',
    last: 'the Bird',
    handle: '@twitter',
  },
];

export const expectedResultArrayHeader = [
  arrayHeader,
  ...arrayContent,
];

export const expectedResultArrayWithoutHeader = arrayContent;

export const expectedResultObjectHeader = [
  arrayHeader,
  ...objectContent,
];

export const expectedResultObjectWithoutHeader = objectContent;

