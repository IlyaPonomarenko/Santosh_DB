//Write  a  function  called  power  which  accepts  a  base  and  an  exponent.
//The  function should return the power of the base to the exponent.
//This function should mimic the functionality of
//Math.pow() – do not worry about negative bases and exponents.


function power(base, exponent) {
if (exponent < 1) return 1
else {
    return base * power(base,exponent-1) ;
}
}

console.log(power(5,0))


// power(2,0) // 1// power(2,2) // 4
