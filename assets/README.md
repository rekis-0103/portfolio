# 📁 Panduan Folder Assets Portofolio

Folder ini disiapkan khusus untuk menyimpan seluruh aset gambar, foto profil, screenshot proyek, dan dokumen (seperti CV/Resume) portofolio Anda.

---

## 📂 Struktur Folder

```
assets/
├── images/
│   ├── profile.jpg (atau profile.png)     -> Foto Profil Utama Anda
│   ├── project-1.png                      -> Screenshot Proyek 1
│   ├── project-2.png                      -> Screenshot Proyek 2
│   ├── project-3.png                      -> Screenshot Proyek 3
│   └── project-4.png                      -> Screenshot Proyek 4
├── docs/
│   └── cv-resume.pdf                      -> File CV / Resume Anda (format PDF)
├── icons/                                 -> (Opsional) Logo atau icon custom
└── README.md                              -> Panduan ini
```

---

## 🖼️ Rekomendasi Format & Ukuran Gambar

1. **Foto Profil (`profile.jpg` / `profile.png`)**:
   - **Rasio**: 1:1 (Persegi)
   - **Ukuran Rekomendasi**: Minimal 500x500 px (Maksimal 1000x1000 px agar loading tetap cepat)
   - **Gaya**: Foto formal atau semi-formal dengan pencahayaan jelas.
   - *Catatan: Website sudah dilengkapi dengan fallback avatar SVG modern otomatis jika Anda belum memasukkan file foto.*

2. **Screenshot Proyek (`project-*.png` / `project-*.jpg`)**:
   - **Rasio**: 16:9 (Landscape)
   - **Ukuran Rekomendasi**: 1280x720 px atau 800x450 px.
   - Format WebP, PNG, atau JPG berkualitas tinggi.

3. **Dokumen CV (`assets/docs/cv-resume.pdf`)**:
   - Masukkan file CV Anda dengan nama `cv-resume.pdf` agar tombol "Download CV" langsung otomatis mengunduh file tersebut.

---

## ⚡ Cara Mengganti Gambar di Kode (index.html)
Jika Anda memberi nama file yang berbeda, cukup buka `index.html` dan cari tag `<img>`:
- Untuk foto profil: cari `src="assets/images/profile.svg"` lalu ganti menjadi `src="assets/images/nama-foto-anda.jpg"`.
- Untuk proyek: cari `src="assets/images/project-1.svg"` lalu ganti dengan path gambar screenshot proyek Anda.
