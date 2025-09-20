// manajemenProduk.js

// Data produk awal
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 },
];

// Fungsi untuk menampilkan produk
function tampilkanProduk() {
  console.log("== Daftar Produk Toko ==");
  produkToko.forEach((p) => {
    console.log(
      `ID: ${p.id}, Nama: ${p.nama}, Harga: Rp${p.harga}, Stok: ${p.stok}`
    );
  });
  console.log(""); // biar ada spasi
}

// Fungsi untuk menambah produk
function tambahProduk(nama, harga, stok) {
  const idBaru = produkToko.length + 1;
  produkToko.push({ id: idBaru, nama, harga, stok });
  console.log(`Produk "${nama}" berhasil ditambahkan!\n`);
  tampilkanProduk();
}

// Fungsi untuk menghapus produk berdasarkan ID
function hapusProduk(id) {
  const index = produkToko.findIndex((p) => p.id === id);
  if (index !== -1) {
    console.log(`Produk "${produkToko[index].nama}" berhasil dihapus!\n`);
    produkToko.splice(index, 1);
    tampilkanProduk();
  } else {
    console.log(`Produk dengan ID ${id} tidak ditemukan!\n`);
  }
}

// ====== Jalankan contoh ======

// Tampilkan produk awal
tampilkanProduk();

// Tambah produk baru
tambahProduk("Headset", 500000, 8);

// Hapus produk dengan ID 2 (Mouse)
hapusProduk(2);
