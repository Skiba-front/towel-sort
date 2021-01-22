
// You should implement your task here.

module.exports = function towelSort (matrix) {
     if (!matrix) {
    return [];
     }
  let res = []

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix.length; j++) {
      res.push(matrix[i][j])
    }
  }

  return res.sort((a, b) => a - b)
}
