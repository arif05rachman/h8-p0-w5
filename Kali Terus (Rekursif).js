function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if(angka.toString().length==1){
        return angka
    }else{
        var hasil = 1;
        for (var i = 0; i < angka.toString().length; i++) {
            hasil = hasil * Number(angka.toString()[i]);
        }
        return kaliTerusRekursif(hasil);
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6