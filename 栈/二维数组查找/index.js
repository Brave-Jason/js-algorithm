const arr = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]

//   const findNumer2DArray = function (matrix, target) {
//       const newArr = matrix.flat()
//       return newArr.indexOf(target) > -1 ? true : false
//   }
 
const  findNumer2DArray = function (matrix ,target) {
     if(!matrix.length) return false;
     const arr = matrix[0]
     for (let i = 0 ; i < matrix.length ; i++) {
         for (let j = 0; j<arr.length;j++) {
             if(matrix[i][j] === target)  return true;
         }
     }
     return false
}