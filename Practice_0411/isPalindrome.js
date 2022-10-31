//Write a recursive func,on called isPalindrome which returns true if the string passed
//to it is a palindrome (reads the same forward and backward).
//Otherwise it returns false.

const isPalindrome = str => {
    const strLen = str.length;
    if (strLen < 2) return true;

    if (str[0] === str[strLen - 1]) {
        return isPalindrome( str.slice(1, strLen - 1) );
    }

    return false;
};
console.log(isPalindrome("racecar"))
console.log(isPalindrome("anton"))