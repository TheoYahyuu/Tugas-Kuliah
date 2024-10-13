//fungsi untuk menampilkan promo hari ini menggunakan percabangan if
function tampilkanPromo(){
    let hari = new Date().getDay();
    let promo = "";

    if(hari ===0 || hari ===6){
        promo = "Diskon 25% untuk semua level pedas!.";
    } else{
        promo = "Beli 3 gratis 1 untuk Seblak level 5.";
    }
    document.getElementById("promoMessage").innerHTML = promo;
}
//Daftar menu seblak favorit beserta harga dan status diskon
let menuFavorit = [
    {nama:"Seblak Kerupuk", harga:15000,diskon:true}, //diskon 25%
    {nama:"Seblak Ceker", harga:18000,diskon:true},
    {nama:"Seblak Kikil", harga:20000,diskon:true},
    {nama:"Seblak Bakso", harga:17000,diskon:true},
];
let totalHargaSetelahDiskon=0; //variabel global untuk menyimpan total harga  

//fungsi untuk menampilkan menu favorit dalam list
function tampilkanMenu(){
    let listMenu = document.getElementById("listMenu");
    let pilihMenu = document.getElementById("pilihMenu");
//
    listMenu.innerHTML='';
    pilihMenu.innerHTML='';

//
    menuFavorit.forEach(function(item,index){

        let li = document.createElement("li");
        li.textContent = `${item.nama} - Rp. ${item.harga}`;
        listMenu.appendChild(li);

        let option = document.createElement("option");
        option.value = index;
        option.textContent = `${item.nama} - Rp. ${item.harga}`;
        pilihMenu.appendChild(option);
    });
}

// Fungsi untuk mengecek pesanan dan menghitung total harga
function CekPesanan(){
    let menuIndex = document.getElementById("pilihMenu").value;
    let jumlahPesanan = document.getElementById("inputJumlah").value;
    let pesan = "";

    if(menuIndex === "" || jumlahPesanan === ""){
        pesan = "Harap pilih menu dan masukkan jumlah pesanan!";
    } else {
        let item = menuFavorit[menuIndex];
        let hargaAsli = item.harga;
        let hargaDiskon = item.diskon ? hargaAsli * 0.75 : hargaAsli; // Jika diskon, 25% diskon
        totalHargaSetelahDiskon = hargaDiskon * jumlahPesanan;

        pesan = `Anda memesan ${jumlahPesanan} ${item.nama}.`;
        document.getElementById("totalBayar").innerHTML = `Total Harga: Rp. ${totalHargaSetelahDiskon}`;
    }

    document.getElementById("hasilPesan").innerHTML = pesan;
}

// Fungsi untuk menghitung kembalian
function hitungKembalian(){
    let uangBayar = document.getElementById("uangBayar").value;
    let kembalian = uangBayar - totalHargaSetelahDiskon;
    let pesanKembalian = "";

    if(kembalian < 0){
        pesanKembalian = "Uang yang Anda masukkan kurang!";
    } else {
        pesanKembalian = `Kembalian Anda: Rp. ${kembalian}`;
    }

    document.getElementById("hasilKembalian").innerHTML = pesanKembalian;
}
