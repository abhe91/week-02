// SOAL NO 1
// ===========================================
// LOOP PERTAMA

    var deret = 0;
while(deret < 20) {     
    deret+=2; 
        console.log(deret + ' - I love coding')
        
    }

// LOOP KEDUA
    var deret = 22;
while(deret > 3) {
     deret -= 2;   
     console.log(deret + ' - I will become fullstack developer')
            
    }

// SOAL KE 2
// ===========================================

for(var deret = 1; deret <= 20; deret++){
    console.log(deret + ' - I Love Coding');
    }

for ( var deret = 20;  deret  > 0; deret--){
    console.log(deret + ' - I will become fullstack developer')
    }

// SOAL KE 3
//  =========================================== 

// 1. Pengulangan count 1 - 100

    var nilai = 1;
while( nilai < 100 ){
    console.log(nilai)
    nilai+=1
    }

//  Pengulangan count 1 - 100, Ganjil || Genap
    var nilai = 1;
   	var akhir = 100;
while( nilai < akhir ){
   	if(nilai%2==0){
   	    console.log(nilai+ ' ini bilangan : GENAP' );
    } else{
   	    console.log(nilai + ' ini bilangan : GANJIL' );
   	    }
        nilai+=1;
    }

// pertambahan 2
    var nilai = 1;
while( nilai < 100 ){
    console.log(nilai)
    nilai+=2
    }

// pertambaan 5
    var nilai = 1;
while( nilai < 100 ){
    console.log(nilai)
    nilai+=5
    }

// pertambaan 9
    var nilai = 1;
while( nilai < 100 ){
    console.log(nilai)
    nilai+=9
    }

// ======================================
    var nilai = 1;
while( nilai < 100 ){
    if(nilai % 3 == 0){
        console.log('counter ' + nilai+ ' kelipatan 3' );
        }else{
            console.log('counter ' + nilai);
            }
            nilai+=2
        }

     var nilai = 1;
while( nilai < 100 ){  
    if(nilai % 6 == 0){
        console.log('counter ' + nilai+ ' kelipatan 6' );
        } else{
            console.log('counter ' + nilai );
            }
            nilai+=5   
        }

      var nilai = 1;
while( nilai < 100 ){  
    if(nilai % 10 == 0){
        console.log('counter ' + nilai+ ' kelipatan 10' );
        } else{
            console.log('counter ' + nilai );
            }  
            nilai+=9    
        }






