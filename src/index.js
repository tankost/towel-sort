
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return [];
  } else {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            if (j % 2 !== 0) {
                matrix[j] = matrix[j].reverse();
            }
        }
        return [].concat(...matrix);
    }
  }
}
