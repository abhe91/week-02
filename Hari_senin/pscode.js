var siswa = 0
var randomKesalahan = Math.floor(Math.random() * 40)
while(siswa < 40){
    siswa+=1
    if (siswa % randomKesalahan == 0 ){
        console.log( siswa + ' guru menghukum')
    }else{
        console.log(siswa +' guru memuji')
  
}

// console.log(randomKesalahan)
   
}
