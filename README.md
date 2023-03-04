Telegram Scraper
Deskripsi
Skrip ini adalah scraper sederhana untuk mengambil anggota dari suatu grup Telegram dan menampilkannya di konsol.

Cara Penggunaan
Pertama, pastikan Anda telah menginstal Node.js dan npm pada sistem Anda.
Unduh repositori ini atau klon repositori ini ke komputer Anda.
Buka terminal dan navigasi ke direktori proyek.
Jalankan perintah npm install untuk menginstal semua dependensi.
Buat file config.js dan masukkan apiId, apiHash, dan botToken Anda. (lihat bagian Mendapatkan apiId, apiHash, dan botToken)
Jalankan skrip dengan menjalankan perintah node scraper.js.
Mendapatkan apiId, apiHash, dan botToken
Untuk menggunakan Telegram API, Anda perlu mendapatkan apiId dan apiHash dari https://my.telegram.org dan botToken dari Bot Father. Berikut adalah langkah-langkah untuk mendapatkan apiId, apiHash, dan botToken:

Mendapatkan apiId dan apiHash
Buka https://my.telegram.org di browser Anda.
Masukkan nomor telepon Anda dan verifikasi nomor telepon Anda dengan kode yang diberikan.
Pilih API development tools.
Catat apiId dan apiHash yang diberikan.
Mendapatkan botToken
Buka Bot Father di Telegram.
Ketik /start untuk memulai percakapan dengan Bot Father.
Ketik /newbot dan ikuti petunjuk untuk membuat bot baru.
Catat botToken yang diberikan.
Konfigurasi
Untuk mengkonfigurasi skrip, buat file config.js dengan mengikuti contoh di bawah ini:

javascript
Copy code
module.exports = {
  apiId: '1234567',             // Ganti dengan apiId Anda
  apiHash: 'abcdefgh1234567',   // Ganti dengan apiHash Anda
  botToken: 'bot_token'         // Ganti dengan botToken Anda
};