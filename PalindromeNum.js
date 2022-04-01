/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x<0)
        return false;
    let calc = Math.floor(x/10);
    let remainder = x % 10;
    var reverse = [];
    let result = 0;
    while(calc > 0){
        reverse.push(remainder);
        remainder = calc % 10;
        calc = Math.floor(calc/10);
    }
    reverse.push(remainder);
    for (let i=0; i< reverse.length;i++){
        result += reverse[i]*Math.pow(10,reverse.length-i-1);
    }
    if (result == x)
        return true;
    return false
};