/**
 * 
Diberikan sebuah variabel num bertipe number.

Buatlah program yang menghasilkan gambar segitiga dengan pola sebagai berikut

Contoh 1:
let num = 3

output yang diharapkan
  x
 xox
xoxox

Contoh 2:
let num = 6


output yang diharapkan
     x
    xox
   xoxox
  xoxoxox
 xoxoxoxox
xoxoxoxoxox


 */

// Nico
let num = 9

let str = ''

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num - i; j++) {
    str += ' '
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    if (k % 2 == 1) {
      str += 'o'
    } else {
      str += 'x'
    }
  }

  str += '\n'
}

console.log(str)


// Andika

for (let i = 0; i < num; i++) {
  let hasil = ''

  for (let j = 1; j < num - i; j++) {
    hasil += ' '
  }

  hasil += 'x'


  for (let k = 1; k < i + 1; k++) {
    hasil += 'ox'
  }
  console.log(hasil)
}


