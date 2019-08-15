function totalDigitRekursif(angka) {
    // you can only write your code here!
    if(angka.toString().length==1){
        return angka
    }else{
        var hasil = 0;
        for (var i = 0; i < angka.toString().length; i++) {
          hasil = hasil + Number(angka.toString()[i]);
        }
        return totalDigitRekursif(hasil)
        //return Number(angka.toString().substring(0, 1)) + totalDigitRekursif(Number(angka.toString().substring(1)));
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5