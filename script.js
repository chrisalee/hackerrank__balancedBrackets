/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

const isBalanced = (s) => {
    let chars = s.split('');
    let charLen = chars.length;
    //a stack because first in last out.  last char needs to be ], }, or )
    let pairs = [];

    for(let i = 0; i < charLen; i++) {
      let char = chars[i];
      //if char is opening add to end of stack (pairs array)
      if(char === '(' || char === '{' || char === '[') {
        pairs.push(char);
        continue;
      }
      if(pairs.length === 0) {
        return 'NO';
      }
      // the last char in pairs needs to be '(' if current char === ')'
      if(char === ')') {
        if(pairs[pairs.length - 1] !== '(') {
          return 'NO';
        } else {  //remove last char from pairs which would be pre char chars[i - 1]
          pairs.pop()
        }
      }
      // the last char in pairs needs to be '{' if current char === '}'
      if(char === '}') {
        //if not, out of sequence and returns no
        if(pairs[pairs.length - 1] !== '{') {
          return 'NO';
        } else {
          pairs.pop()
        }
      }
      // the last char in pairs needs to be '[' if current char === ']'
      if(char === ']') {
        if(pairs[pairs.length - 1] !== '[') {
          return 'NO';
        } else {
          pairs.pop()
        }
      }
    }
  
    return pairs.length === 0 ? 'YES' : 'NO';
}

////////////////////////////////////////////////

function isBalanced(s) {
   while (
          String(s).includes('[]') || 
          String(s).includes('{}') || 
          String(s).includes('()')) {
          s = s.replace('[]', '')
          s = s.replace('{}', '')
          s = s.replace('()', '')
      }
  return s.length === 0 ? 'YES' : 'NO';
}
