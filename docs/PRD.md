# Lalapel Simple Note Taking App

## Ringkasan Produk

Aplikasi pencatat sederhana yang memungkinkan pengguna membuat akun, masuk, dan mengelola beberapa catatan dalam bentuk tab pada sebuah canvas.

Admin hanya dapat melihat daftar pengguna terdaftar dan jumlah total tab di seluruh aplikasi. Admin tidak dapat melihat pemilik, judul, maupun isi catatan.

### User

- Registrasi akun.
- Login dan logout.
- Melihat canvas miliknya.
- Membuat, mengedit, dan menghapus tab catatan.
- Hanya dapat mengakses catatan miliknya sendiri.

### Admin

- Login melalui sistem autentikasi yang sama.
- Melihat daftar pengguna terdaftar.
- Melihat jumlah seluruh pengguna.
- Melihat jumlah total tab dalam aplikasi.
- Tidak dapat melihat hubungan antara tab dan pemiliknya.
- Tidak dapat melihat judul atau isi tab.

## 4. Fitur Utama

### 4.1 Registrasi

User mendaftar menggunakan:

- Nama
- Email
- Password
- Konfirmasi password

Ketentuan:

- Email harus unik.
- Password disimpan secara aman.
- Setelah registrasi berhasil, user dapat langsung masuk ke canvas.

### 4.2 Login

- User dan admin login menggunakan email dan password.
- User diarahkan ke canvas.
- Admin diarahkan ke dashboard admin.
- Pengguna yang belum login tidak dapat membuka canvas atau dashboard admin.

### 4.3 Canvas Catatan

Canvas merupakan halaman utama user.

Canvas harus menyediakan:

- Daftar tab catatan.
- Tombol tambah tab.
- Area untuk mengedit catatan aktif.
- Tombol hapus tab.
- Tombol logout.

Jika user belum memiliki catatan, tampilkan empty state dan tombol untuk membuat catatan pertama.

### 4.4 Tab Catatan

Setiap tab memiliki:

- Judul
- Isi catatan
- Tanggal dibuat
- Tanggal terakhir diperbarui

Kemampuan user:

- Membuat tab baru.
- Memilih tab yang ingin dibuka.
- Mengubah judul.
- Mengubah isi.
- Menghapus tab.
- Melihat kembali tab setelah login ulang.

Judul awal tab baru dapat menggunakan nilai `Untitled Note`.

### 4.5 Penghapusan Tab

- Hanya pemilik tab yang dapat menghapusnya.
- User harus mendapat konfirmasi sebelum tab dihapus.
- Setelah dihapus, tab tidak perlu dapat dipulihkan pada versi MVP.
- Jika tab aktif dihapus, aplikasi membuka tab lain yang masih tersedia atau menampilkan empty state.

### 4.6 Dashboard Admin

Dashboard admin menampilkan:

- Jumlah total pengguna terdaftar.
- Jumlah total tab yang tersimpan.
- Daftar pengguna berisi nama, email, dan tanggal registrasi.

Dashboard admin tidak boleh menampilkan:

- Judul catatan.
- Isi catatan.
- Pemilik sebuah tab.
- Jumlah tab per pengguna.
- Tautan dari pengguna menuju catatannya.

## 5. Alur Utama User

1. User membuka aplikasi.
2. User melakukan registrasi atau login.
3. User masuk ke canvas.
4. User menekan tombol tambah tab.
5. Tab baru dibuat dengan judul awal `Untitled Note`.
6. User mengubah judul dan isi catatan.
7. Perubahan disimpan.
8. User dapat membuat, memilih, atau menghapus tab lainnya.
9. User logout.

## 6. Alur Utama Admin

1. Admin membuka halaman login.
2. Admin login menggunakan akun dengan role `admin`.
3. Admin masuk ke dashboard admin.
4. Admin melihat statistik total user dan total tab.
5. Admin dapat melihat daftar akun yang terdaftar.
6. Admin tidak dapat membuka data catatan.

## 7. Aturan Akses dan Privasi

- Setiap catatan harus dimiliki oleh tepat satu user.
- User tidak dapat melihat atau mengubah catatan user lain.
- Admin tidak memiliki akses untuk membaca catatan.
- API catatan harus memeriksa kepemilikan sebelum membaca, mengubah, atau menghapus data.
- Informasi kepemilikan tetap disimpan oleh sistem untuk keamanan, tetapi tidak ditampilkan kepada admin.

## 8. Struktur Data Minimal

### User

- ID
- Nama
- Email
- Password
- Role: `user` atau `admin`
- Tanggal registrasi

### Note

- ID
- User ID
- Judul
- Isi
- Tanggal dibuat
- Tanggal diperbarui

Istilah “tab” pada antarmuka merepresentasikan satu data `Note`.

## MVP

- User dapat registrasi, login, dan logout.
- User yang login dapat membuat tab catatan.
- Judul dan isi catatan dapat disimpan dan diedit.
- Catatan tetap tersedia setelah halaman dimuat ulang atau user login kembali.
- User dapat berpindah antar-tab.
- User dapat menghapus tab miliknya.
- User tidak dapat mengakses catatan user lain.
- Admin dapat melihat daftar dan total pengguna.
- Admin dapat melihat jumlah total tab.
- Admin tidak dapat melihat judul, isi, atau pemilik tab.
- Halaman user dan admin dilindungi berdasarkan autentikasi dan role.