# Cetak Biru Struktur Komponen Orbit Canvas (HTML / JSX Layout)

Dokumen ini menjelaskan struktur dasar komponen **Orbit Canvas** menggunakan React JSX, Tailwind CSS, dan GSAP. Tujuannya adalah membuat kartu proyek dan sertifikat mengorbit di depan foto profil sehingga menghasilkan efek visual 3D yang modern.

---

# Struktur Layout

```jsx
<div className="relative w-full h-screen bg-[#0B0C10] overflow-hidden flex flex-col justify-between items-center">

  {/* ===================================================== */}
  {/* 1. BACKGROUND GRID EFFECT */}
  {/* ===================================================== */}
  <div
    className="absolute inset-0
    bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]
    bg-[size:4rem_4rem]
    [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]
    opacity-20"
  ></div>

  {/* ===================================================== */}
  {/* 2. HEADER */}
  {/* ===================================================== */}
  <div className="z-10 text-center mt-10">
    <h1 className="text-4xl font-extrabold text-white tracking-wider uppercase">
      My Creative Orbit
    </h1>

    <p className="text-gray-400 mt-2">
      Klik kartu di samping untuk fokus pada pencapaian gua
    </p>
  </div>

  {/* ===================================================== */}
  {/* 3. ORBIT AREA */}
  {/* ===================================================== */}
  <div className="relative w-full max-w-5xl h-[500px] flex justify-center items-center">

    {/* FOTO PROFIL */}
    <div
      className="absolute z-10
      w-[320px]
      h-[320px]
      rounded-full
      border-4
      border-[#66FCF1]
      overflow-hidden
      shadow-[0_0_30px_rgba(102,252,241,0.3)]
      animate-pulse-slow"
    >
      <img
        src="/images/foto-profil.png"
        alt="My Profile"
        className="w-full h-full object-cover"
      />
    </div>

    {/* ORBIT PROJECT */}
    <div className="absolute left-0 w-1/2 h-full z-20 flex items-center justify-around">

      {/* Project Cards */}

    </div>

    {/* ORBIT CERTIFICATE */}
    <div className="absolute right-0 w-1/2 h-full z-20 flex items-center justify-around">

      {/* Certificate Cards */}

    </div>

  </div>

  {/* ===================================================== */}
  {/* 4. FOOTER */}
  {/* ===================================================== */}
  <div className="z-10 mb-8 w-full max-w-xl text-center">

    <div className="flex justify-center gap-6 text-2xl text-gray-400">

      {/* PHP */}
      {/* JavaScript */}
      {/* SQL */}
      {/* Midtrans */}
      {/* Python */}

    </div>

  </div>

</div>
```

---

# Penjelasan Struktur

## 1. Background Grid

Membuat efek grid futuristik menggunakan Tailwind CSS.

Fungsi:

- Background utama.
- Memberikan kesan cyber/digital.
- Berada pada layer paling belakang (`absolute`).

---

## 2. Header

Berisi:

- Judul utama.
- Deskripsi singkat.

Menggunakan:

- `z-10`
- `text-center`

agar selalu tampil di atas background.

---

## 3. Orbit Area

Merupakan bagian paling penting.

```
             Header

                ▲

      Project Cards      Certificate Cards
             \              /
              \            /
               \          /
                \        /
                 [ FOTO ]
                /        \
               /          \
      Project Cards      Certificate Cards

                ▼

             Tech Stack
```

Pada area ini terdapat:

### Foto Profil

Posisi:

- Tengah
- `absolute`
- `z-10`

Foto menjadi pusat orbit.

---

### Orbit Project

Posisi:

- Sebelah kiri.

Berisi:

- Card Project
- Card Portfolio

Card akan bergerak melengkung menuju depan foto.

---

### Orbit Certificate

Posisi:

- Sebelah kanan.

Berisi:

- Sertifikat
- Penghargaan
- Achievement

Card juga bergerak melengkung menuju depan foto.

---

## 4. Footer

Berisi logo teknologi.

Contoh:

- PHP
- JavaScript
- React
- SQL
- Python
- Midtrans

---

# Layer (Z-Index)

| Komponen | Z-Index |
|----------|---------|
| Background | 0 |
| Foto Profil | 10 |
| Orbit Cards | 20 |
| Active Card | 999 |

Saat kartu diklik:

- Card berpindah menjadi layer paling depan.
- Menutupi sebagian badan foto.
- Menjadi fokus utama.

---

# Blueprint Animasi Orbit (GSAP)

## Contoh Implementasi

```jsx
import { useEffect } from "react";
import { gsap } from "gsap";

export default function OrbitCanvas() {

  useEffect(() => {

    // Orbit Project
    gsap.set(".project-card", {
      transformPerspective: 1000,
      rotationY: 35,
      z: 50,
      x: (i) => i * 40 - 80,
      opacity: 0.85
    });

    // Orbit Certificate
    gsap.set(".cert-card", {
      transformPerspective: 1000,
      rotationY: -35,
      z: 50,
      x: (i) => i * -40 + 80,
      opacity: 0.85
    });

  }, []);

  const handleCardClick = (e) => {

    gsap.to(e.currentTarget, {

      duration: 0.6,

      x: 0,

      rotationY: 0,

      z: 150,

      scale: 1.1,

      ease: "power2.out",

      overwrite: "auto"

    });

  };

}
```

---

# Penjelasan Animasi

## transformPerspective

```js
transformPerspective: 1000
```

Memberikan efek perspektif 3D sehingga rotasi terlihat realistis.

---

## rotationY

```js
rotationY: 35
```

Membuat kartu menghadap ke arah foto.

Nilai negatif digunakan untuk sisi kanan.

---

## z

```js
z: 50
```

Menggeser kartu ke depan layar.

Saat aktif:

```js
z:150
```

Sehingga kartu berada di depan foto.

---

## x

```js
x:(i)=>i*40-80
```

Mengatur posisi horizontal setiap kartu berdasarkan indeks.

---

## scale

```js
scale:1.1
```

Memperbesar kartu saat dipilih.

---

## ease

```js
ease:"power2.out"
```

Membuat animasi terasa lebih halus.

---

# Alur Interaksi

1. Halaman dimuat.
2. Foto tampil di tengah.
3. Kartu proyek muncul dari kiri.
4. Kartu sertifikat muncul dari kanan.
5. Seluruh kartu membentuk orbit melengkung.
6. Pengguna mengklik kartu.
7. Kartu bergerak ke depan.
8. Foto berada di belakang kartu.
9. Informasi kartu menjadi fokus utama.
10. Setelah selesai, kartu kembali ke posisi orbit.

---

# Hasil yang Diharapkan

- Layout modern bergaya portfolio.
- Efek orbit 3D menggunakan GSAP.
- Foto profil menjadi pusat perhatian.
- Kartu proyek dan sertifikat mengelilingi foto.
- Saat dipilih, kartu tampil di depan foto dengan animasi yang halus dan responsif.