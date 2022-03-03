/**
 * Buatlah kodingan untuk membuat array 3 dimensi menjadi array 1 dimensi
 */
const array = [
  [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
  ]
]

let result = []
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    for (let k = 0; k < array[i][j].length; k++) {
      result.push(array[i][j][k])
    }
  }
}

console.log(result)
/**

Expected output: ['a', 'b', 'c', 'd', 'e', 'f']

 */
