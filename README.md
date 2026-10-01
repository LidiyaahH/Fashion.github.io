# Fashion Notes — Simple Fashion Blog

Blog fashion statis dengan HTML, CSS, dan JavaScript untuk dipublikasikan melalui GitHub Pages. Tema: Bohemian, Preppy, Chic, dan Texas. Empat foto yang disediakan sudah dimasukkan ke folder `assets/`.

## File proyek
- `index.html` — konten blog dan empat artikel gaya.
- `style.css` — layout editorial, warna, tipografi, dan responsive design.
- `script.js` — menu mobile, filter kategori, dan form demo.
- `assets/` — foto Bohemian, Preppy, Chic, dan Texas.

## Cara menjalankan di komputer
Buka `index.html` di browser. Untuk pengalaman yang lebih mirip server, gunakan ekstensi Live Server di VS Code.

## Cara publish ke GitHub Pages
1. Login ke GitHub lalu buat repository baru, misalnya `fashion-notes`.
2. Upload seluruh isi folder proyek ini ke root repository. Pastikan `index.html`, `style.css`, `script.js`, dan folder `assets` terlihat di root.
3. Buka **Settings → Pages**.
4. Pada bagian **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/(root)`, lalu klik **Save**.
6. Tunggu proses deployment. URL blog akan tampil di halaman Pages, biasanya berbentuk `https://USERNAME.github.io/fashion-notes/`.

## Mengubah isi blog
- Edit teks artikel langsung di `index.html`.
- Untuk mengganti foto, unggah foto baru ke folder `assets`, lalu sesuaikan nama file pada atribut `src`.
- Ubah warna, font, dan layout di `style.css`.
- Filter kategori pada halaman memakai `data-category` di setiap `article` dan `data-filter` pada tombol.
- Form email saat ini hanya demonstrasi: tidak mengirim atau menyimpan data.

## Catatan tugas: Achieving Operational Excellence
**Kegunaan bagi bisnis:** blog dapat membantu toko fashion memperkenalkan produk melalui artikel inspirasi outfit, mengarahkan pembaca ke katalog toko, membangun identitas merek, dan mengumpulkan masukan pembaca.

**Fitur bisnis yang bisa dijelaskan:**
- Posts: menerbitkan artikel dan promosi produk.
- Labels: mengelompokkan artikel berdasarkan gaya.
- Comments: menerima pertanyaan dan masukan.
- Pages: menyediakan halaman About dan Contact.
- Theme: menyesuaikan tampilan dengan identitas merek.
- Stats: memahami jumlah kunjungan dan konten yang diminati.
- Pada versi GitHub Pages ini, fitur artikel, filter kategori, dan desain dibuat dengan kode. Komentar dan analitik yang lebih lengkap membutuhkan layanan eksternal atau integrasi tambahan.

> Tugas pada instruksi menyebut Blogger.com, sedangkan proyek ini dibuat sebagai website statis di GitHub Pages sesuai permintaan. GitHub Pages tidak menyediakan backend atau database bawaan.
