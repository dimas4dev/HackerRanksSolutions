function solution(matrix) {
  const flat = matrix.flat();
  flat.sort();
  console.log(flat);
}

solution([
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
]);
