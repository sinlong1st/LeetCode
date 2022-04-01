/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    if (s.length > 104){return 0;}
    let spaceNum = 0;
    for (let i = s.length - 1; i >= 0; i--){
        // if ((s[i] < 32) || (s[i] > 32 && s[i] < 65) || (s[i] > 90 && s[i] < 97) || (s[i] > 122)){
        //     return 0;
        //     break;
        // }
        if (s[i] == " ")
            spaceNum++;
        if (s[i] != " "){
            if (i == 0){
                return (s.length - i - spaceNum);
            }else{
                if (s[i-1] == " ")
                    return (s.length - i - spaceNum);
            }
        }    
    }
    return 0;
};