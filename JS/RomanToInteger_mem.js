/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    if(s.length < 1 || s.length > 15)
        return 0;
    
    let result = 0;
    const mapRoman = new Map([["I", 1],["V", 5],["X", 10],["L", 50],["C", 100],["D", 500],["M", 1000]]); 
    for (let i = 0 ; i < s.length; i++){
        if ((s[i+1] == "V" || s[i+1] =="X" || s[i+1] =="L" || 
             s[i+1] =="C" || s[i+1] =="D" || s[i+1] =="M") && (mapRoman.get(s[i+1]) > mapRoman.get(s[i]))){
            result += (mapRoman.get(s[i+1]) - mapRoman.get(s[i]));//
            i++;
        }else{
            result += mapRoman.get(s[i]);
        }
    }   
    return result;
};