function to_roman(input) {
  // start your code here
  var tampung = ''

  var angka = [1000, 900, 500,400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  var aturan = ['m', 'cm', 'd', 'cd', 'c', 'xc', 'l', 'xl', 'x', 'ix', 'v', 'iv', 'i']

  if(input == 0) {
    return ''
  }

  for(var i = 0; i < angka.length; i++) {
    if(input >= angka[i]) {
      return aturan[i] + to_roman(input - angka[i])
    }
  }

  /*if(input >= 90) {
    return tampung + 'xc' + to_roman(input - 90)
    //return tampung
  }

  if(input >= 50) {
    return tampung + 'l' + to_roman(input - 50)
    //return tampung
  }

  if(input >= 40) {
    return tampung + 'xl' + to_roman(input - 40)
    //return tampung
  }

  if(input >= 10) {
    return tampung + 'x' + to_roman(input - 10)
    //return tampung
  }

  if(input >= 9) {
    return tampung + 'ix' + to_roman(input - 9)
    //return tampung
  }

  if(input >= 5) {
    return tampung + 'v' + to_roman(input - 5)
    //return tampung
  }

  if(input >= 4) {
    return tampung + 'iv' + to_roman(input - 4)
    //return tampung
  }

  if(input >= 1) {
    return tampung + 'i' + to_roman(input - 1)
    //return tampung
  }

  if(input == 0) {
    return ''
  } */
}

console.log(to_roman(45));

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
console.log('1     | I       | ', to_roman(1))
