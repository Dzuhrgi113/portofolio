# Blueprint Struktur Layout Orbit Portfolio
### Versi Final (Mengacu pada Desain Mockup)

---

# Gambaran Layout

Layout menggunakan konsep **Orbit UI + Glassmorphism + 3D Card**.

```
┌──────────────────────────────────────────────────────────────┐
│                         HEADER                               │
│                Portfolio Website / Logo                      │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│          Project Card            Main Card         Cert Card │
│             ╲                      │                  ╱       │
│              ╲─────────────────────┼────────────────╱        │
│                     Orbit Path (3D Circular)                 │
│                              ○                               │
│                           Profile Area                       │
│                                                              │
│            Project Info / Certificate Info                   │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│     PREV                Tech Stack                 NEXT       │
└──────────────────────────────────────────────────────────────┘
```

---

# Struktur Komponen

```
App.jsx
│
└── OrbitPortfolio
    │
    ├── BackgroundGrid
    │
    ├── Header
    │
    ├── OrbitSection
    │     │
    │     ├── Orbit Path
    │     ├── Main Active Card
    │     ├── Project Card (Left)
    │     ├── Certificate Card (Right)
    │     ├── Orbit Center
    │     └── Profile Illustration
    │
    ├── Information Panel
    │
    ├── Navigation
    │     ├── Prev Button
    │     └── Next Button
    │
    ├── Social Sidebar
    │
    └── Tech Stack Footer
```

---

# 1. Background Layer

Layer paling belakang.

Fungsi:

- Blueprint Grid
- Neon Effect
- Glow
- Dark Theme

```
Z-Index : 0
```

---

# 2. Header

Berada di bagian atas halaman.

```
Portfolio Website
```

Berisi:

- Logo
- Nama Portfolio
- Navigation (optional)

```
Z-Index : 5
```

---

# 3. Orbit Section (Bagian Inti)

Merupakan fokus utama halaman.

```
          Project Card

               ╲

                ╲

           Active Card

                │

                ○

                │

           Profile Area

                ╱

         Certificate Card
```

Seluruh animasi berada pada section ini.

---

# 4. Main Active Card

Posisi:

```
Center
```

Ukuran:

```
Lebih besar
```

Isi:

- Screenshot Project
- Judul
- Glow Border
- Hover Animation

Contoh:

```
Portfolio Website
```

Status:

```
Active
```

---

# 5. Project Card

Posisi:

```
Left
```

Mengikuti jalur orbit.

Memiliki:

- rotateY()
- scale()
- opacity()

Status:

```
Previous Card
```

Contoh:

```
Algorithm Visualization
```

---

# 6. Certificate Card

Posisi:

```
Right
```

Mengikuti orbit.

Contoh:

```
Google AI Fundamentals
```

Status:

```
Next Card
```

---

# 7. Orbit Path

Orbit bukan berupa slider lurus.

Tetapi berupa:

```
Semi Circle

atau

Ellipse
```

Visual:

```
╭──────────────╮
│              │
│              │
╰──────────────╯
```

Menggunakan:

- SVG Path
- CSS
- GSAP MotionPath

---

# 8. Orbit Center

Titik pusat orbit.

```
○
```

Fungsi:

- Anchor
- Center Animation
- Reference Orbit

---

# 9. Profile Area

Berada tepat di bawah orbit.

```
👤
```

Berfungsi sebagai:

- Identitas pemilik portfolio
- Titik akhir orbit visual

Tidak mengambil fokus dari kartu utama.

---

# 10. Information Panel

Berada di bawah kartu utama.

Contoh:

```
Dicoding :
Web Programming
```

diikuti

```
Completed with Honors
```

Panel ini berubah otomatis mengikuti kartu yang aktif.

Data yang ditampilkan:

- Judul
- Provider
- Status
- Deskripsi singkat

---

# 11. Navigation

Posisi:

```
Bottom Left
```

```
PREV
```

dan

```
Bottom Right
```

```
NEXT
```

Navigasi digunakan untuk:

- Rotate Orbit
- Mengganti Active Card

---

# 12. Social Sidebar

Posisi:

```
Right
```

Vertikal.

Berisi:

- Facebook
- Telegram
- Twitter / X
- YouTube
- WhatsApp

Menggunakan efek:

- Glass
- Hover Glow

---

# 13. Tech Stack Footer

Berada paling bawah.

Contoh:

```
PHP

JavaScript

SQL

Midtrans

Python

React
```

Setiap icon memiliki:

- Logo
- Label
- Hover Effect

---

# Hierarki Layer

| Layer | Komponen | Z-Index |
|---------|----------|---------|
| 1 | Background | 0 |
| 2 | Orbit Path | 1 |
| 3 | Project & Certificate | 2 |
| 4 | Active Card | 5 |
| 5 | Information Panel | 6 |
| 6 | Navigation | 7 |
| 7 | Social Sidebar | 8 |
| 8 | Tech Stack | 9 |

---

# Alur Interaksi

```
Load Website
      │
      ▼
Render Background
      │
      ▼
Render Orbit
      │
      ▼
Render Active Card
      │
      ▼
Render Project Card
      │
      ▼
Render Certificate Card
      │
      ▼
User Klik NEXT
      │
      ▼
Orbit Berputar
      │
      ▼
Card Berikutnya Menjadi Active
      │
      ▼
Information Panel Update
      │
      ▼
Animasi Glow & Scale
```

---

# Efek Animasi

## Active Card

- Scale 1.0
- Glow Border
- Shadow Neon
- Fade In

---

## Side Card

- RotateY ±25°
- Scale 0.85
- Opacity 40%
- Sedikit masuk ke belakang (translateZ)

---

## OrbitS

Menggunakan:

- MotionPath GSAP
- translate3D()
- rotateY()
- perspective()

Sehingga perpindahan kartu mengikuti jalur **orbit melingkar**, bukan hanya bergeser ke kiri dan kanan.

---

# Prinsip Desain

✅ Orbit benar-benar melingkar (bukan slider biasa)

✅ Kartu utama selalu menjadi pusat perhatian

✅ Kartu kiri dan kanan mengikuti perspektif 3D

✅ Informasi berubah sesuai kartu aktif

✅ Navigasi sederhana dan mudah dipahami

✅ Background grid memberikan nuansa blueprint/tech

✅ Tech Stack dan Social Media dipisahkan agar layout tetap bersih

---

# Hasil Akhir yang Diharapkan

Portfolio memiliki tampilan modern bergaya **Interactive Orbit Showcase**, dengan satu kartu utama di tengah yang menjadi fokus, dua kartu pendamping yang bergerak mengikuti lintasan orbit 3D, panel informasi dinamis di bawah kartu aktif, serta elemen pendukung seperti Tech Stack, Social Sidebar, dan tombol navigasi yang tersusun rapi sesuai mockup desain.