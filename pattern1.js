const row = 5;
const col = 5;
const pattern = "*";

for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= col; j++) {
    process.stdout.write(pattern);
  }
  process.stdout.write("\n");
}
