/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xArray = (x.toString()).split('');
    let reversedArray = [];
    for(let i = xArray.length-1; i >=0; i--){
        reversedArray.push(xArray[i]);
    }

    let reversedArrayToNum = reversedArray.join('');

    if(x === Number(reversedArrayToNum)) return true;

    return false;
};