function to_roman(input) {
  // start your code here
  if(input === 0){
    return "";
  }
  if(input - 1000 >= 0){
    input -= 1000;
    return 'M' + to_roman(input);
  }
  if(input - 900 >= 0){
    input -= 900;
    return 'CM' + to_roman(input);
  }
  if(input - 500 >= 0){
    input -= 500;
    return 'D' + to_roman(input);
  }
  if(input - 400 >= 0){
    input -= 400;
    return 'CD' + to_roman(input);
  }
  if(input - 100 >= 0){
    input -= 100;
    return 'C' + to_roman(input);
  }
  if(input - 90 >= 0){
    input -= 90;
    return 'XC' + to_roman(input);
  }
  if(input - 50 >= 0){
    input -= 50;
    return 'L' + to_roman(input);
  }
  if(input - 40 >= 0){
    input -= 40;
    return 'XL' + to_roman(input);
  }
  if(input - 10 >= 0){
    input -= 10;
    return 'X' + to_roman(input);
  }
  if(input - 9 >= 0){
    input -= 9;
    return 'IX' + to_roman(input);
  }
  if(input - 5 >= 0){
    input -= 5;
    return 'V' + to_roman(input);
  }
  if(input - 4 >= 0){
    input -= 4;
    return 'IV' + to_roman(input);
  }
  if(input - 1 >= 0){
    input -= 1;
    return 'I' + to_roman(input);
  }

  return to_roman(input);
}

console.log(to_roman(999))
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
