//Hasbunallah Wanimalwakil::


function xo(str){
    var jumlahX =0;
    var jumlahO =0;

    for(var i=0; i<str.length; i++){
        if( str[i] === 'x'){
                jumlahX++
            }else if (str[i] === 'o'){
                jumlahO++
                }
            }
    if ( jumlahX === jumlahO ){
        return true
            }else {
        return false
                }
            }
            
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true