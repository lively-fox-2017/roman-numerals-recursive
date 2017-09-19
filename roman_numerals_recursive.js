function to_roman(angka) {
  let result = '';
  if (angka === 0) {
    result = '';
  } else if (angka / 1000 >= 1) {
    result = 'M' + to_roman(angka - 1000);
  } else if (angka / 900 >= 1) {
    result = 'CM' + to_roman(angka - 900);
  } else if (angka / 500 >= 1) {
    result = 'D' + to_roman(angka - 500);
  } else if (angka / 400 >= 1) {
    result = 'CD' + to_roman(angka - 400);
  } else if (angka / 100 >= 1) {
    result = 'C' + to_roman(angka - 100);
  } else if (angka / 90 >= 1) {
    result = 'XC' + to_roman(angka - 90);
  } else if (angka / 50 >= 1) {
    result = 'L' + to_roman(angka - 50);
  } else if (angka / 40 >= 1) {
    result = 'XL' + to_roman(angka - 40);
  } else if (angka / 10 >= 1) {
    result = 'X' + to_roman(angka - 10);
  } else if (angka / 9 >= 1) {
    result = 'IX' + to_roman(angka - 9);
  } else if (angka / 5 >= 1) {
    result = 'V' + to_roman(angka - 5);
  } else if (angka / 4 >= 1) {
    result = 'IV' + to_roman(angka - 4);
  } else if (angka / 1 >= 1) {
    result = 'I' + to_roman(angka - 1);
  }

  return result;
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
