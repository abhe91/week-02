
    var input = '';
    var kata = input;
function balikKata(kata){
    
    for( var i = kata.length-1; i >= 0; i--){
    input += kata.charAt(i);
    }
    return input
}
console.log(balikKata('Hello World and Coders ')); // sredoC dna dlroW olleH

// console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
// console.log(balikKata('John Doe')); // eoD nhoJ
// console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
// console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
// console.log(balikKata('Super')); // repuS
