// Menyimpan judul halaman awal
const title = document.title;

// Menambahkan event listener ke window
window.addEventListener('blur', () => {
  // Ketika pengguna berpindah tab, ganti judul halaman
  document.title = 'Kami membutuhkanmu! ';
});

window.addEventListener('focus', () => {
  // Ketika pengguna kembali ke tab, kembalikan judul halaman awal
  document.title = title;
});



