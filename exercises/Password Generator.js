function changeVocals (str) {
    let vocal = 'aiueoAIUEO'
    let change = 'bjvfpBJVFP'
    let strChange =''
    for(let i=0; i< str.length; i++) {
        for (var j = 0; j < vocal.length; j++) {
            if (str[i] === vocal[j]) {
                strChange += change[j]
                break
            }
        }
        if(str[i]!=vocal[j]){
            strChange+=str[i]                
        }
    }
    return strChange  
}
  
function reverseWord (str) {
    let strReverse = ''
    for(let i=str.length-1; i>=0; i--) {
        strReverse += str[i]
    }
    return strReverse
}
  
  function setLowerUpperCase (str) {
      let lowerUpper = ''
      for(let i=0; i<str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            lowerUpper += str[i].toLowerCase()
        }else{
            lowerUpper += str[i].toUpperCase()
        }
      }
      return lowerUpper
}
  
  function removeSpaces (str) {
      strRemove = ''
      for(let i=0; i<str.length; i++) {
        if (str[i] === ' ') {
            strRemove += ''
        }else{
            strRemove += str[i]
        }
      }
      return strRemove
  }
  
  function passwordGenerator (name) {
    var change = changeVocals(name)
    var reverse = reverseWord(change)
    var lowerUpper = setLowerUpperCase(reverse)
    var removeSpace = removeSpaces(lowerUpper)
    return removeSpace
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'