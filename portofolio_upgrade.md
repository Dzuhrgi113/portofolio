# 🚀 Portfolio Website V3
## Interactive 3D Orbit Portfolio
**Author:** Rahman Dzuhrgi

---

# 🎯 Tujuan Upgrade

Merombak tampilan portfolio menjadi lebih modern, premium, interaktif, dan memberikan pengalaman seperti sedang menjelajahi dunia digital milik pemilik portfolio.

Konsep utama:

> **"Saya adalah pusat dari portfolio, sedangkan semua project, sertifikat, pengalaman, dan informasi berputar mengelilingi saya."**

Tidak lagi menggunakan layout card biasa.

---

# Design Concept

Tema:

- Futuristic
- Cyber Technology
- Interactive
- Premium
- Clean
- 3D UI
- Glassmorphism
- Neon Glow
- Dark Mode

Inspirasi:

Apple Vision Pro

Iron Man HUD

Cyberpunk

Awwwards Portfolio

Spline 3D

ThreeJS Showcase

GSAP Animation

---

# Warna

Background

```
#070B18
```

Gradient

```
#0E1833
```

Neon Blue

```
#33D4FF
```

Neon Purple

```
#A855F7
```

Pink

```
#FF4DA6
```

Glass

```
rgba(255,255,255,.08)
```

---

# Layout

```
----------------------------------------------------
Logo

HOME
PROJECT
CERTIFICATE
ABOUT
EXPERIENCE
CONTACT

Language
----------------------------------------------------


             (Floating Certificates)

                    ◻︎


         Project        Certificate

               \

                 Rahman

               /


 Project                   Project

        Experience


----------------------------------------------------

Tech Stack

----------------------------------------------------
```

---

# Hero Section

Bagian ini menjadi pusat website.

## Karakter utama

Foto Rahman menjadi objek utama.

Tidak ada frame.

Tidak ada kotak.

Tidak ada background putih.

Foto langsung menyatu dengan website.

Seolah berdiri di dunia digital.

---

## Posisi

Center

Lebih besar

Sedikit keluar dari orbit

Tinggi sekitar 600-700 px

---

## Edit Foto

Foto wajib:

✔ Background transparan

✔ HD

✔ Face tetap asli

✔ Warna natural

✔ Shadow halus

✔ Edge rapi

✔ Tidak blur

✔ Jas tetap ada

✔ Dasi tetap ada

✔ Tangan kiri masuk kantong celana

✔ HP tetap di tangan kanan

✔ Rambut tidak berubah

✔ Wajah tidak berubah

---

# Background

Menggunakan:

Dark Grid

Code Background

Glow

Particles

Floating Light

Blur Circle

Motion Gradient

Contoh:

```
import React from "react"

const data = ...

fetch("/api")
```

Opacity hanya sekitar 5%.

---

# Interactive Orbit

Inilah fitur utama.

Semua project mengelilingi Rahman.

Orbit berbentuk ellipse.

Ada 3 layer orbit.

Layer depan

Layer tengah

Layer belakang

Sehingga terlihat benar-benar 3D.

---

# Orbit Animation

Menggunakan GSAP.

Kecepatan lambat.

Infinite.

Smooth.

Saat hover:

Pause orbit.

---

# Project Card

Project tampil sebagai floating card.

Isi card:

Judul

Kategori

Tech Stack

Thumbnail

Deskripsi singkat

Status

Button

---

Contoh

```
E-Commerce Website

PHP Native

MySQL

Keranjang

Checkout

Pembayaran

Admin Panel
```

---

# Sertifikat

Floating seperti project.

Misalnya:

Google AI Fundamentals

Dicoding Web

FCC Responsive

Google Cloud

Oracle

Meta

Microsoft

Cisco

AWS

IBM

---

# Experience Card

Posisi kiri atau kanan atas.

Glassmorphism.

Contoh:

```
Experience

Intern Web Developer

Freelance

Competition

Organization
```

---

# About Me Card

Card melayang.

Isi:

Foto kecil.

Nama.

Deskripsi.

CV Button.

Download Resume.

---

# Orbit Layer

Layer 1

Project

Layer 2

Certificate

Layer 3

Experience

Semua memiliki ukuran berbeda.

---

# Efek Saat Hover

Saat hover:

Card membesar.

Glow muncul.

Shadow naik.

Border neon aktif.

Background blur.

---

# Saat Card Diklik

Semua card lain blur.

Card aktif maju ke depan.

Muncul:

Gallery

Video

Github

Live Demo

Tech Stack

Flowchart

Documentation

---

# Carousel

User dapat:

Drag

Swipe

Mouse Wheel

Arrow

Keyboard

Touch

---

# Tech Stack

Bagian bawah.

Glass panel.

Icon:

PHP

JavaScript

MySQL

API

CodeIgniter

Laravel

Python

React

GSAP

ThreeJS

Tailwind

Bootstrap

Docker

Git

Github

---

Saat hover icon

Glow

Scale

Tooltip

Persentase skill

---

# Timeline Experience

Klik menu Experience.

Animasi timeline muncul.

```
2022

|

Intern

|

Freelance

|

College

|

Now
```

---

# Certification Page

Grid modern.

Hover flip.

Search.

Category.

Filter.

Preview.

Download.

---

# Project Detail

Berisi:

Overview

Features

Gallery

Architecture

ERD

Flowchart

Source Code

Live Demo

Video

---

# Contact

Floating card.

Whatsapp

Github

LinkedIn

Instagram

Email

Telegram

---

Hover

Glow

Animation

Scale

---

# Cursor

Custom cursor.

Glow.

Hover effect.

Magnetic button.

---

# Loading Screen

Saat website dibuka.

Animasi:

Logo

Nama

Loading Orbit

100%

Fade

---

# Animasi

Menggunakan:

GSAP

Lenis

ScrollTrigger

SplitType

MotionPath

Magnetic

Fade

Scale

Parallax

3D Rotate

---

# Sound

Opsional.

Hover.

Click.

Success.

---

# Responsive

Desktop

Laptop

Tablet

Mobile

Landscape

---

# Teknologi

Frontend

- React
- Vite
- TailwindCSS

Animation

- GSAP
- ScrollTrigger
- Lenis

3D

- Three.js
- React Three Fiber

Icons

- Lucide
- React Icons

Slider

- SwiperJS

Backend

- PHP Native
- CodeIgniter 4

Database

- MySQL

---

# Struktur Folder

```
src/

components/

Hero/

Orbit/

Project/

Certificate/

Experience/

About/

TechStack/

Contact/

Navbar/

Loader/

Cursor/

Background/

pages/

Home.jsx

Projects.jsx

Certificates.jsx

Experience.jsx

About.jsx

Contact.jsx

assets/

images/

projects/

certificates/

profile/

icons/

animations/

styles/

hooks/

utils/

data/

projects.json

certificates.json

experience.json

skills.json
```

---

# Target Akhir

Website memberikan kesan:

✔ Futuristik

✔ Premium

✔ Interaktif

✔ Personal Branding kuat

✔ Menampilkan Rahman sebagai pusat ekosistem digital

✔ Semua project dan sertifikat mengelilingi Rahman dalam orbit 3D yang dapat digeser, diklik, dan dieksplorasi.

---

# Roadmap Pengerjaan

## Tahap 1
- Membuat Hero Section baru
- Mengedit foto menjadi PNG transparan
- Background futuristik
- Grid + kode

## Tahap 2
- Membuat Orbit 3D
- Integrasi GSAP MotionPath
- Drag & Swipe carousel

## Tahap 3
- Membuat Project Card interaktif
- Membuat Certificate Card
- Menambahkan hover dan glow

## Tahap 4
- Halaman About Me
- Timeline Experience
- Contact Glass Card

## Tahap 5
- Optimasi performa
- Responsive
- SEO
- Lazy loading
- Animasi tambahan

---

# Hasil yang Diharapkan

Portfolio terasa seperti sebuah **Digital Command Center** atau **Personal Tech Universe**, di mana Rahman Dzuhrgi menjadi pusat ekosistem digital, sementara seluruh project, sertifikat, pengalaman, dan teknologi mengorbit di sekelilingnya secara interaktif. Pengunjung dapat menggeser orbit, mengklik setiap kartu untuk melihat detail, dan menikmati pengalaman visual yang modern, halus, serta profesional.