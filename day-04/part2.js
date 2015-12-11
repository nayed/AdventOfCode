'use strict'

import md5 from 'md5'

let input = 'bgvyzdsv'

let number = 0

let result = ''

while (result.substr(0, 6) !== '000000') {
  number++
  result = md5(input + number)
}

console.log(number)
