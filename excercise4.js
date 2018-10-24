var tanggal = 1;
var bulan = 1;
var tahun = 2010;

var erorCheck = false;
if(tanggal > 31 || tanggal < 1){
  erorCheck = true
} else if( bulan > 12 || bulan < 1){
  erorCheck = true
} else if(tahun < 1900 || tahun > 2200){
  erorCheck = true
}

switch(bulan) {
  case 1:
   bulan = 'Januari'
   break;
   case 2:
   bulan = 'Februari'
   break;
   case 3:
   bulan = 'Maret'
   break;
   case 4:
   bulan = 'April'
   break;
   case 5:
   bulan = 'Mei'
   break;
   case 6:
   bulan = 'Juni'
   break;
   case 7:
   bulan = 'Juli'
   break;
   case 8:
   bulan = 'Agustus'
   break;
   case 9:
   bulan = 'September'
   break;
   case 10:
   bulan = 'Oktober'
   break;
   case 11:
   bulan = 'November'
   break;
   case 12:
   bulan = 'Desember'
   break;
  }
  if (erorCheck == false){
console.log(tanggal + bulan + tahun)
} else { console.log('data salah')}