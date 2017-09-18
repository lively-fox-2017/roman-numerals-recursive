function to_roman(input) {
  // start your code here
  var numS = input.toString(); // merubah num jadi string
  var romawi ='';
  var roman = [[0,'',''],[1,'I','V'] ,[2 , 'X' ,'L'] ,[3,'C','D'] , [4,'M' , 'V']] ;

  var unit = numS.length;
  if ('123'.indexOf(numS[0])!=-1){
    romawi = roman[unit][1].repeat(numS[0]) ;
  }
  else if('678'.indexOf(numS[0])!=-1){
    romawi = roman[unit][2] + roman[unit][1].repeat(numS[0]-5) ;
  }
  else if (numS[0]==4 ){
    romawi = roman[unit][1]+roman[unit][2]  ;
  }
  else if(numS[0]==5){
    romawi = roman[unit][2]  ;
  }
  else if(numS[0]==9){
    romawi = roman[unit][1]+roman[unit+1][1]  ;
  }

  if (numS.length==1){
    return romawi;
  }
  else{
    return romawi += to_roman(Number(numS.substring(1,999)));
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
