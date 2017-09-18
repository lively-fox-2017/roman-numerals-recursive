function to_roman(input) {
  let latin= [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romawi=['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	if(input==0){ // base case untuk stop
		return '';
	}else{
		for(i=0; i<latin.length; i++){ // looping sebanyak panjang array latin
			if(input >= latin[i]) { // jika inputan masih kurang dari array latin ke i, maka
				return romawi[i] + to_roman(input-latin[i]); // return kan nilai romawi ke i + hasil dari fungsi to_roman (recursifnya)
			}
		}
	}
return to_roman(input);
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
