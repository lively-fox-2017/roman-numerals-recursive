function to_roman(input) {
  var data = [
    [1000, 'M'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  let hasil = ''
  for (var a = 0; a < data.length; a++) {

    if (input===0){
      return '';
    }
    else if (input >= data[a][0]) {
      hasil += data[a][1];
      return hasil + to_roman(input -= data[a][0]);
    }
  }
}

console.log('My totally sweet testing script for new roman\n');
console.log('input | expected | actual');
console.log('——————|——————————|————————');
console.log('4     | IV       | ', to_roman(4));
console.log('9     | IX       | ', to_roman(9));
console.log('13    | XIII     | ', to_roman(13));
console.log('1453  | MCDLIII  | ', to_roman(1453));
console.log('1646  | MDCXLVI  | ', to_roman(1646));