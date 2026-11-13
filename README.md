# Tiga Display — Landing Page UMKM

Landing page modern, elegan, dan premium untuk **Tiga Display**, usaha toko box dan display perhiasan.

## Teknologi
- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5.3.3
- Bootstrap Icons
- Google Fonts (Playfair Display & DM Sans)

## Struktur folder
```text
tiga-display/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── hero-display.svg
    ├── box-ring.svg
    ├── display-necklace.svg
    ├── display-set.svg
    └── about-showcase.svg
```

## Cara menjalankan
1. Ekstrak file ZIP.
2. Buka folder `tiga-display`.
3. Klik dua kali `index.html`, atau jalankan dengan ekstensi Live Server di Visual Studio Code.
4. Koneksi internet diperlukan untuk memuat Bootstrap CDN, Bootstrap Icons, dan Google Fonts.

Tidak memerlukan database, backend, instalasi package, maupun proses build.

## Kustomisasi penting
### Nomor WhatsApp
Buka `js/script.js`, lalu ubah:
```js
const WHATSAPP_NUMBER = "6280000000000";
```
Gunakan format kode negara dan nomor tanpa tanda `+`, spasi, atau strip. Contoh format Indonesia: `62812XXXXXXXX`.

### Konten dan produk
- Ubah nama, deskripsi, dan teks halaman melalui `index.html`.
- Ubah warna utama melalui variabel CSS di bagian `:root` pada `css/style.css`.
- Ganti ilustrasi SVG di folder `images/` dengan foto produk milik toko. Pertahankan nama file atau sesuaikan atribut `src` di HTML.

## Catatan
Ilustrasi di folder `images` merupakan aset SVG lokal buatan untuk template ini, bukan foto produk aktual. Nomor WhatsApp masih berupa placeholder dan perlu diganti sebelum website dipublikasikan.
