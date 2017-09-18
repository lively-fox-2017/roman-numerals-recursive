function to_roman(input) {
  // start your code here
   var roman = ['M', 'D', 'CD', 'C', 'L', 'XL', 'X',  'IX', 'V','IV', 'I'];
  var angka =  [1000, 500, 400, 100, 50, 40, 10, 9, 5, 4,1];
  var result = '';

 	if(input === 0){
 		return result;
 	}else{

 	for(var i = 0; i < angka.length; i++){
 		// console.log('angka dikurang',input%angka[i] + ' ' + 'input '+input)
 		while( input % angka[i] < input){
 			result += roman[i];
 			input -= angka[i];
 			// console.log(roman)
 			return result + to_roman(input);
 		}	
 	}
 }

}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
