
SOAL 1.
pseudocode 
==============================

STORE 'massa' with any value
STORE 'kg' with any value
STORE 'Newton' without any value

CALCULATE 'massa' times 'kg'
	SET 'Newton' value with calculation result
	DISPLAY 'Newton'



// SOAL NO 2
// Alghoritm
// ==============================

1. simpan tahun sama dengan nilai lebih besar dari 0 
2. jika simpan nilai Tahun dengan modulus 4 sama dengan 0 dan tahun dengan modulus 100 tidak sama dengan 0, masuk langkah ke 2
3. tampilkan  "tahun kabisat".
4. input Tahun dengan modulus 4 sama dengan 0 dan tahun dengan modulus 100 tidak samadengan 0, masuk langkah ke 2 dan tahun dengan modulus 400 samadengan 0;
4. tampilkan  "tahun kabisat".
5. jika bukan, maka tampilkan no 6
6. tampilkan  "bukan tahun kabsiat"


pseudocode 
==============================

STORE tahun with > 0
if 'tahun' mod 4 equals 0 AND 'tahun' mod 100 not equals 0;
        DISPLAY 'tahun Kabsiat' 
    else if 'tahun' modulus 4 equals 0 AND 'tahun' modulus  100 equals 0 AND 'tahun' modulus 400 equels 0;
        DISPLAY 'tahun kabsiat'
    else 
        DISPLAY 'bukan tahun kabsiat'

}


// soal no 3
// Algorithm
// =================================
1.Simpan nilai "foxi" sama dengan 0
2.simpan nilai"isi" sama dengan 20
3.Ulangi step 3 selama "foxi" masih dibawah 20. Jika "foxi" sudah 20, lanjut ke step 4.
4.Tambah "foxi" dengan 1, agar semakin mendekati batas perulangan. Kembali ke step 3.
5.Tampilkan "foxi"
6.jika "foxi" sama dengan "isi", lanjut ke tahap 7
7.tampilkan "Mesin Cuci Menyala"
8.jika tidak, lanjutkan ke tahap 9
9.tampilkan "Mesin cuci tidak Menyala"


STORE "foxi" with 0
STORE "isi" with 20
WHILE "foxi" les then 20
    ADD "foxi" by 1
    DISPLAY "foxi"

    IF "foxi" equels "isi"
        DISPLAY "Mesin Cuci Menyala"
        else
        DISPLAY "Mesin cuci tidak Menyala"

// soal no 4
// Algorithm
// =================================

1. Simpan nilai siswa dengan angka 0;
2. Simpan nilai randomKesalahan dengan random di kali 40
3. ulangi step 3 jika nilai masih kurang dari  40
4. Tambah "siswa" dengan 1, agar semakin mendekati batas perulangan. 
5. jika nilai siswa modulus randomKesalahan hasilnya true, maka lanjut ke no 6
6. tampilkan "siswa" + "guru menghukum"
7. dan jika randomKesalahan sama dengan false, maka lanjut ke no 8
8. tampilkan "siswa" + "guru memuji"

pseudocode
=======================================

STORE "siswa" = 0
STORE "randomKesalahan" equels Math.floor(Math.random() * 40
WHILE "siswa" les than "40"
    siswa add equel by 1
        IF siswa mod randomKesalahan equels 0 
            DISPLAY  "siswa" + ' guru menghukum'
        ELSE
            DISPLAY "siswa" +' guru memuji'


    
