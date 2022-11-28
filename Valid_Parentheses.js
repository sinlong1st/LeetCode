'use strict';

var isValid = function (s) {
  if (s.length < 2 || s.length > 10000) return false;
  const box = [];

  for (let i = 0; i < s.length; i++) {
    if (
      s[i] !== '(' &&
      s[i] !== '[' &&
      s[i] !== '{' &&
      s[i] !== ')' &&
      s[i] !== ']' &&
      s[i] !== '}'
    ) {
      return false;
    }
    if (s[i] === '(') {
      box.push(')');
      console.log(box, i);
      continue;
    }

    if (s[i] === '[') {
      box.push(']');
      //console.log(box, i);
      continue;
    }

    if (s[i] === '{') {
      box.push('}');
      //console.log(box, i);
      continue;
    }
    if (box.length === 0) {
      return false;
    }

    if (s[i] === box[box.length - 1]) {
      box.pop();
      //console.log(box, i);
      continue;
    } else {
      return false;
    }
  }
  if (box.length === 0) return true;
  return false;
};

// console.log(isValid('()[]{}'));
// console.log(isValid('()]{}'));
console.log(isValid('}}}}]'));
console.log(isValid('[}]'));
console.log(isValid('([{}])'));
console.log(isValid('[{()}}]'));
//console.log(isValid('}]'));
//console.log(isValid('(]'));
