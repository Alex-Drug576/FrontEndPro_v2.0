var userName = 'AlexDrug';
var ageNum = '20';
var textSay = 'Hello World';
var result;

result = userName + ' ' + ageNum + ' ' + textSay;
console.log(result);

console.log(' +"40" + +"2" - 42\n',
    '"2" + 3 ** 2 - 29\n',
    '3 ** 2/3 - 3\n',
    '3 ** (9/3) - 27\n',
    'undefined + 1 - NaN\n',
    '+null + 10 - 10\n',
    'null / 5 - 0\n',
    '"hello" + null - "hellonull"\n',
    '"hello" - undefined + " " - NaN \n',
    '"30" + 3 - "3" - 300\n',
    '10 % "5" - 0');
var number = 5;
number = 2 * ++number;
console.log(number);
number = 5;
number = 2 * number++;
console.log(number);