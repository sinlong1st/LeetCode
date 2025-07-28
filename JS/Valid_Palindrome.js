'use strict';
// const flight = 'LH234';
// const tai = {
//   name: 'Tai Nguyen',
//   passport: 123456789,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 123456789) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!!');
//   }
// };

// checkIn(flight, tai);

// console.log(flight);
// console.log(tai);

/*
 * @param {string} s
 * @return {boolean}
 * 1. Converting to lowercase
 * 2. Replace non-alphanumeric chars with ''
 * 3. Split => Reverse => Join again
 * 4. Compare
 */

var isPalindrome = function (s) {
  if (s.length > 2 * 10 ** 5) {
    return false;
  }
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let reverseStr = s.split('').reverse().join('');
  return reverseStr === s ? true : false;
};
console.log(isPalindrome('A man, a plan, a canal: Panama##'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));
console.log(isPalindrome('asdasd'));

// Another way:
// var isPalindrome = function (s) {
//   s = s.replace(/[^0-9a-zA-Z]+/gim, '');
//   s = s.toLowerCase();
//   var first = 0,
//     last = s.length - 1;
//   // console.log(s);

//   while (first < last) {
//     if (s.charAt(l) != s.charAt(r)) {
//       return false;
//     }
//     first++;
//     last--;
//   }
//   return true;
// };
