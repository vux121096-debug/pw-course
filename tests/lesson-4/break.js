for (let i = 10; i <= 20; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

for (let j = 10; j <= 20; j++) {
  if (j % 2 !== 0) {
    console.log(j);
  }
}

for (let k = 50; k <= 100; k++) {
  console.log(k);
  if (k % 3 === 0) {
    break;
  }
}
