function changeVocals (str) {
    //code di sini
    var dari = 'aiueoAIUEO'
    var ke = 'bjvfpBJVFP'
    change = ''
    for(var i=0; i<str.length; i++){
        for(var j=0; j<dari.length; j++){
            if(str[i]==dari[j]){
                change+=ke[j]
                break
            }
        }
        if(str[i]!=dari[j]){
            change+=str[i]                
        }
    }
    return change 
}
  
function reverseWord (str) {
    //code di sini
    var reverse = ''
    for(var i = str.length-1; i >=0; i--){
        reverse+=str[i]
    }
    return reverse
}

function setLowerUpperCase (str) {
    //code di sini
    var lowerUper=''
    for(var i = 0; i < str.length; i++){
        if(str[i]==str[i].toLowerCase()){
            lowerUper+=str[i].toUpperCase()
        }else {
            lowerUper+=str[i].toLowerCase()
        }
    }
    return lowerUper
}
  
function removeSpaces (str) {
    //code di sini
    remove=''
    for(var i = 0; i < str.length; i++){
        if(str[i]==' '){
            i++
            remove+=str[i]
        }else{
            remove+=str[i]
        }
    }
    return remove
}
  
function passwordGenerator (name) {
    //code di sini
    var change = changeVocals(name)
    var reverse = reverseWord(change)
    var lowerUper = setLowerUpperCase(reverse)
    var remove = removeSpaces(lowerUper)
    if(remove.length<5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }else{
        return remove
    }
}
  
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'