/**
Diberikan sebuah function ladder berisi satu parameter bertipe string

Buatlah program yang menghasilkan gambar yang menyerupai tangga dengan pola sebagai berikut:

kata yang paling atas adalah kata itu sendiri dengan catatan masing-masing huruf berada di indeks berbeda di satu array
setiap turun, huruf akan berkurang 1 dari belakang (dari value kata awal)
 */

// Agnes

function ladder(word) {
  //your code here
  let result = []

  for (let i = 0; i < word.length; i++) {
    let res= []
    for (let j = 0; j < word.length - i; j++) {
      res.push(word[j])
    }
    result.push(res)
  }
  return result
}

//Anam

function ladder(word) {
  const temp = word.split('')
  const result = []

  for (let i = 0; i < temp.length; i++) {
    result.push(temp.slice(0, temp.length - i))
  }
  return result

}


// Dhimas

function ladder(word) {
  let result = []

  for (let i = word.length; i > 0; i--) {
    let temp = []

    for (let j = 0; j < i; j++) {
      temp.push(word[j])
    }

    result.push(temp)
  }

  return result;
}
// DRIVER CODE
console.log(ladder('coding'));
/**
 * Expected output
 [
   [ 'c', 'o', 'd', 'i', 'n', 'g' ], // i = 0; loop = 6
   [ 'c', 'o', 'd', 'i', 'n' ], // i = 1; loop = 5
   [ 'c', 'o', 'd', 'i' ], // i = 2; loop = 4
   [ 'c', 'o', 'd'],
   [ 'c', 'o' ],
   [ 'c' ],
 ]
 */