// reverse a string word by word
var reverseWords = function(s) {
    if (s === ' ') return '';
    if (s.length < 1) return s;

    s = s.trim().split('').reverse();
    console.log('s>>',s);

    var ret = '';
    var wordStack = [];
    var j = 0;
    while (j < s.length) {
        if (s[j] === ' ')  {
            if (wordStack.length > 0) {
                while (wordStack.length > 0) {
                    ret += wordStack.pop();
                }
                ret += ' ';
            }
        } else {
            wordStack.push(s[j]);
        }

        j++;
        console.log(wordStack)
    }
    console.log('st >>>', wordStack)


    while (wordStack.length > 0) {
        ret += wordStack.pop();
    }

    return ret
};

console.log(reverseWords('the sky is blue'));

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr.length)