function to_roman(input) {
  // start your code here
  var res = ''
  var latin = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
  var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']

  var numArrRom = ['M', 'D', 'CD', 'C', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  var numArrLat = [1000, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1]
  var tampung = ''

  for(var i = 0; i < numArrLat.length; i++){
  	if(input <= 0){
  		return tampung;
  	}else if(input >= numArrLat[i]){
  		tampung += numArrRom[i]
  		input -= numArrLat[i]
  	}
  }
  return tampung + to_roman(input)
  
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
