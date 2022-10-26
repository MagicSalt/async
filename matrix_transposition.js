const transpose = function(matrix) {

  let array = [];
  for (let i = 0; i < matrix[0].length; i++) {
    array.push([]);
  }

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      array[y][x] = matrix[x][y];
    }
  }
  return array;

};

const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + ' ');
    }
    process.stdout.write('\n');
  }
};

module.exports = transpose;

// printMatrix(
//   transpose([
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   ])
// );

// console.log('----');

// printMatrix(
//   transpose([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ])
// );

// console.log('---');

// printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));