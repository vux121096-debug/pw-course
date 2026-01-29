const height = 155;
const oddHeight = height % 100;

const idealWeight = (oddHeight * 9) / 10;
const maxWeight = oddHeight;
const minWeight = (oddHeight * 8) / 10;

console.log(
  `Ideal Weight: ${idealWeight}, Max Weight: ${maxWeight}, Min Weight: ${minWeight}`,
);
