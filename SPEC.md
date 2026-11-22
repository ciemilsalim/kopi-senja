# SPEC: Form Pesan Kopi Senja

## Tujuan
Pelanggan bisa memesan langsung dari halaman, lalu pesannya terkirim rapi ke WhatsApp.

## Kebutuhan
- Form punya 3 isian: nama, pilihan menu, jumlah (1–10).
- Pilihan menu diambil dari 3 menu yang sudah ada.
- Tombol "Kirim ke WhatsApp" membuka wa.me/6281234567890
  dengan pesan: "Halo Kopi Senja, saya <nama> pesan <jumlah> <menu>."
- Total harga tampil otomatis saat menu/jumlah diganti.

## Batasan
- Tetap satu file index.html, tanpa library tambahan.
- Pakai warna dan gaya yang sudah ada.

## Tidak dikerjakan
- Tidak ada login, database, atau pembayaran online.

## Kriteria selesai
- [ ] Nama kosong → muncul pesan "Nama wajib diisi"
- [ ] Total benar: 2 × Kopi Susu Aren = Rp36.000
- [ ] Link WhatsApp berisi pesan yang sesuai
- [ ] Tampilan rapi di layar HP

---

# SPEC: Status Buka/Tutup

## Tujuan
Pengunjung langsung tahu kedai sedang buka atau tutup.

## Kebutuhan
- Di bawah judul tampil "Buka sekarang" atau "Sedang tutup", plus jam buka 08.00–22.00.
- Pakai jam di perangkat pengunjung.

## Batasan
- Tanpa library tambahan. Logika jam di file jam.js supaya bisa dites.

## Kriteria selesai
- [ ] 07.59 → Tutup
- [ ] 08.00 → Buka
- [ ] 21.59 → Buka
- [ ] 22.00 → Tutup
