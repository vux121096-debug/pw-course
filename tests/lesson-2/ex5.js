/* Bai 1
a. Lap tu 1 -> 100
b. Trong moi vong lap, in ra:
    - Neu gia tri cua vong lap chia het cho 2, in "So <i> la so chan"
    - Neu gia tri cua vong lap khong chia het cho 2, in "So <i> la so le"
*/

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`So ${i} la so chan`);
  }
  if (i % 2 !== 0) {
    console.log(`So ${i} la so le`);
  }
}
