//Given two strings, write a function to determine if the second string is an anagram
//of the first.

//An anagram is a word, phrase, or name formed by rearranging the letters of another,
//such as cinema, formed from iceman.

// Time complexity - O(n)
function validAnagram(a,b){
    if (a.length !== b.length) {
        return false
    }
    return a.toLowerCase().split("").sort().join("") ===
     b.toLowerCase().split("").sort().join("")
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false) 
