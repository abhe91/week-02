var nama = 'zero';
var peran = 'penyihir';
if(nama == '' && peran == '') {
  console.log("Nama harus diisi!");
} else if(nama == 'abhe' && peran == '' )
        { console.log("Halo abhe, Pilih peranmu untuk memulai game!");
} else if(nama == 'Nina' && peran == 'Ksatria')
        {console.log("Selamat datang di Dunia Proxytia, Nina" +
            "Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!");
} else if(nama == 'Danu' && peran == 'Tabib' ){
    console.log("Selamat datang di Dunia Proxytia, Danu" +
    "Halo Tabib Danu, kamu akan membantu temanmu yang terluka.");
}else if(nama == 'zero' && peran == 'penyihir' ){
    console.log("Selamat datang di Dunia Proxytia, Zero" +
    "Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!")
}
else {
    console.log("nama dan peran harus di isi");
  }
