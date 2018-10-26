// Silahkan bermain game bersama kami:
// Ada 3 pilihan peran [Kesatria] [Tabib] [Penyihir] 

var nama = '';
var peran = '';
if(nama == '' && peran != '' ){
            console.log("Nama harus di isi");
    } else if(nama != '' && peran == '' ){
            console.log('Halo ' + nama + ' Pilih peranmu untuk memulai game!');
    } else if(nama != '' && peran == 'Kesatria' ){
            console.log('Selamat datang di Dunia, Proxytia ' + nama + ', ' + '\n'+
                'Halo ' + peran + ' ' + nama + ' kamu dapat menyerang dengan senjatamu!');
    } else if(nama != '' && peran == 'Tabib' ){
            console.log('Selamat datang di Dunia Proxytia, ' + nama + '\n'+
        'Halo ' + peran + ' ' + nama + ' kamu akan membantu temanmu yang terluka.');
    }else if(nama != '' && peran == 'Penyihir' ){
            console.log('Selamat datang di Dunia Proxytia, ' + nama + '\n'+
    'Halo ' + peran + ','+ nama + ' ciptakan keajaiban yang membantu kemenanganmu!')
    }else {
            console.log( 'nama harus diisi  dan pilih salah satu peran yang benar');
    }
