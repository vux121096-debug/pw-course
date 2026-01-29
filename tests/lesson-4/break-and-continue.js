// Dùng continue để kiểm tra số lẻ, gặp i là số chắn, bỏ qua console.log
for (let i = 10; i <= 20; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// Dùng if condition để kiểm tra số lẻ, nếu gặp số lẻ in ra.
for (let j = 10; j <= 20; j++) {
  if (j % 2 !== 0) {
    console.log(j);
  }
}

// Dùng break để tìm ra phần tử đầu tiên thoả mãn điều kiện, sau đó dừng!
for (let k = 50; k <= 100; k++) {
  console.log(k);
  if (k % 3 === 0) {
    break;
  }
}
