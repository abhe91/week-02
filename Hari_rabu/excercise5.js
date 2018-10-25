// SOAL NO 1
// =====================================

var word = 'JavaScript ';
var second = 'is ';
var third = 'awesome ';
var fourth = 'and ';
var fifth = 'I ';
var sixth = 'love ';
var seventh = 'it!';

console.log(word + second + third + fourth + fifth + sixth + seventh);
//output : JavaScript is awesome and I love it!

// SOAL NO 2
// ===================================

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
var thirdWord = word[15] + word[16];
var fourthWord = word[18] + word[19];
var fifthWord = word[21] + word[22] + word[23] + word[24];

console.log('First Word: ' + exampleFirstWord);// First Word: wow
console.log('Second Word: ' + secondWord);// Second Word: JavaScript
console.log('Third Word: ' + thirdWord ); // Third Word: is
console.log('Fourth Word: ' + fourthWord); // Fourth Word: so
console.log('Fifth Word: ' + fifthWord); // Fifth Word: cool

// SOAL NO 3
// ==========================================

var word3 = 'wow JavaScript is so cool';
var exampleFirstWord = word3.substring(0, 3);
var secondWord = word3.substring(4, 14);
var thirdWord = word3.substring(15, 17);
var fourthWord = word3.substring(18, 20);
var fifthWord= word3.substring(21, 25);

console.log(word.length);
console.log('First Word: ' + exampleFirstWord); // First Word: wow
console.log('Second Word: ' + secondWord);// First Word: wow
console.log('Third Word: ' + thirdWord); // Third Word: is
console.log('Fourth Word: ' + fourthWord); // Fourth Word: so
console.log('Fifth Word: ' + fifthWord); // Fifth Word: cool


// SOAL NO 4
// ==========================================

var word4 = 'wow JavaScript is so cool';
var FirstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substring(4, 14);
var thirdWord4 = word4.substring(15, 17);
var fourthWord4 = word4.substring(18, 20);
var fifthWord4 = word4.substring(21, 25);

// console.log(word4.length);
console.log('First Word: ' + FirstWord4 + ', with length ' + FirstWord4.length); //First Word: wow, with length 3
console.log('Second Word: ' + secondWord4 + ', with length ' + secondWord4.length); // Second Word: JavaScript, with length 10
console.log('Third Word: ' + thirdWord4 + ', with length ' + thirdWord4.length); // Third Word: is, with length 2
console.log('Fourth Word: ' + fourthWord4 + ', with length ' + fourthWord4.length); // Fourth Word: so, with length 2
console.log('Fifth Word: ' + fifthWord4 + ', with length ' + fifthWord4.length);// Fifth Word: cool, with length 4
