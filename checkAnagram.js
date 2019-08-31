// Check whether two strings are anagrams 
// follow the approach of Frequency counter 
// lop throught both strings to create two frequency counter objects 
// find the values of frequency of Object one key in another


function isAnagram (str1, str2) {
    if(str1.length !== str2.length) return false
    let frequencyCounter1 = getCharFrequency(str1)
    let frequencyCounter2 = getCharFrequency(str2)
    for(let key in frequencyCounter1){
        if(!frequencyCounter2.hasOwnProperty(key)) return false
        if(frequencyCounter1[key] !== frequencyCounter2[key]) return false
    }
    return true
}

function getCharFrequency(str) {
    let obj = {}
    for(let char of str){
        if(isAlpha(char)) {
            char.toLowerCase()
            obj[char] = ++obj[char] || 1
        }
    }
    return obj
}

function isAlpha(char){
    // (char.codeCharAt(0) > 47 && char.codeCharAt(0) < 58) // numeric char check, not needed
    // better approach than RegExp
    if((char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123) ||
    (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91)) {
        return true
    }
    return false
}
