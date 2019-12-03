function kaliTerusRekursif(angka) {
    if (String(angka).length === 1) {
        return angka
    } else {
        let hasil = 1
        for (var i = 0; i < String(angka).length; i++) {
            hasil = hasil * Number(String(angka)[i]);
        }
        return kaliTerusRekursif(hasil)
    }
}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6