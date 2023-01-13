'use strict';

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let last = digits.length - 1; // Xét chữ số cuối
  // Nếu không phải 9 thì cộng 1 lên bình thường
  if (digits[last] < 9) {
    digits[last] = digits[last] + 1;
    return digits;
  } else {
    // Nếu số cuối là 9

    // Nếu mảng chỉ là số 9, trả thẳng về 10
    if (last === 0) {
      return [1, 0];
    }
    // Nếu số lớn hơn 1 chữ số
    // xy9 + 1 = x(y+1)0
    digits[last] = 0;
    while (digits[last - 1] === 9 && last != 1) {
      digits[last - 1] = 0;
      last--;
    }
    // Trường hợp cho các số 99, 999, ...
    if (digits[0] === 9 && last === 1) {
      digits[0] = 1;
      digits.push(0);
    } else {
      // Số trước thêm 1 đơn vị
      digits[last - 1] = digits[last - 1] + 1;
    }
  }
  return digits;
};

// console.log(plusOne([4, 3, 8, 4, 9, 1]));
// console.log(plusOne([1, 9, 9, 9, 9, 9]));
//   index              0, 1, 2, 3, 4, 5
//   199999 =>       2, 0, 0, 0, 0, 0, 0

console.log(plusOne([1, 9, 9, 9, 9, 9]));
console.log(plusOne([1, 9]));
console.log(plusOne([3, 9, 9]));
console.log(plusOne([9, 9, 6, 9]));
console.log(plusOne([9]));
console.log(plusOne([9, 9, 1, 1, 9]));
//console.log(plusOne([0, 9, 9]));
