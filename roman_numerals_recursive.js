function to_roman(input) {
  // start your code here
  var arrInput;
  var urutanProses;
  var output='';
  // pecah ke satuan puluhan dan ribuan
  function converter(angka, position){
    //jika satuan, jika puluhan, jika ribuan
    var hasil='';
    var sets = {
      satuan: {
        awal:'I',
        tengah:'V',
        akhir:'X'
      },
      puluhan: {
        awal:'X',
        tengah:'L',
        Akhir:'C'
      },
      ratusan: {
        awal:'C',
        tengah: 'D',
        akhir: 'M',
      },
      ribuan: {
        awal: 'M'
      }
    }
    var setPerubahan;
    switch (position) {
      case 'satuan':
        setPerubahan=sets.satuan;
        break;
      case 'puluhan':
        setPerubahan=sets.puluhan;
        break;
      case 'ratusan':
        setPerubahan=sets.ratusan;
        break;
      case 'ribuan':
        setPerubahan=sets.ribuan
        break;
      default:
        setPerubahan=undefined;
        break;
    }
    //if angka antara 1-3
    if(angka>=1 && angka<=3){
      for (var i = 1; i <=angka; i++) {
        hasil+= setPerubahan.awal;
      }
    }
    //if angka 4
    else if (angka == 4) {
      hasil = setPerubahan.awal+setPerubahan.tengah;
    }
    //if angka 5
    else if (angka == 5) {
      hasil = setPerubahan.tengah;
    }
    //if angka 6-8
    else if (angka>=6 && angka<=8) {
      hasil = setPerubahan.tengah;
      for (var i = 1; i < angka-4; i++) {
        hasil += setPerubahan.awal;
      }
    }
    //if angka 9
    else if (angka == 9) {
      hasil = setPerubahan.awal+setPerubahan.akhir;
    }
    return hasil;
  }
  function stackProcess(arrInput){
    switch (arrInput.length) {
      case 4:
        return ['ribuan', 'ratusan', 'puluhan', 'satuan'];
        break;
      case 3:
        return ['ratusan', 'puluhan', 'satuan'];
        break;
      case 2:
        return ['puluhan', 'satuan'];
        break;
      case 1:
        return ['satuan'];
        break;

    }
  }
  function preProcessing(num){
    //ubah jadi string
    //terus split sebagai array
    //terus return as array of number
    var copyAsString = num.toString();
    var turnToArr = copyAsString.split('');
    return turnToArr;
  }
  arrInput = preProcessing(input);
  urutanProses = stackProcess(arrInput);


  output+= converter(arrInput.shift(), urutanProses.shift());


  if (urutanProses.length==0){
    return output;
  }

  return output+to_roman(arrInput.join(''));
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
