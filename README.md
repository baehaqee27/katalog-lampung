# 🏛️ Katalog Digital Budaya Lampung

Aplikasi web interaktif ini dibangun sebagai media presentasi informatif tentang kekayaan budaya daerah Lampung. Dikembangkan dengan gaya desain **Brutalism** yang modern, tegas, dan unik, aplikasi ini memastikan pengalaman pengguna (*user experience*) yang tajam, sangat responsif di perangkat seluler (HP), dan memukau secara visual.

## 🌟 Fitur Utama
- **7 Segmen Budaya**: Memuat ragam katalog mulai dari Rumah Adat (Nuwo Sesat), Masjid Islamic Center Tubaba, Siger & Kain Tapis, Makanan Tradisional (Seruit), Tari Cangget, Taman Nasional Way Kambas, hingga Aksara Kaganga.
- **Desain Brutalism Estetik**: Menggunakan bingkai tebal (*hard shadows*), warna asimetris yang solid, dan komponen visual bergaya retro-modern yang *eye-catching*.
- **Komentar Real-Time (Firebase)**: Kolom diskusi dua arah di setiap halaman. Audiens bisa berinteraksi, membalas (*nested replies*), dan melihat pesan masuk secara instan tanpa perlu memuat ulang (*refresh*) halaman.
- **Autentikasi Google Terintegrasi**: Mengirim komentar menjadi sangat aman dan privat menggunakan akun Google asli (*Google Sign-In*).
- **Mobile-First App**: Konten secara eksklusif dikunci di ukuran maksimal proporsi HP (`max-w-md`) agar terlihat sangat simetris dan rapi saat audiens mengaksesnya via *QR Code*.

## 🛠️ Teknologi yang Digunakan
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router) & React 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Ikonografi**: [Lucide React](https://lucide.dev/)
- **Database & Auth**: [Firebase Realtime Database](https://firebase.google.com/products/realtime-database) & Firebase Authentication (Google Provider)
- **Komponen Waktu**: `date-fns` untuk rendering waktu *live-ticking* (contoh: "1 menit yang lalu").

## 🚀 Cara Menjalankan di Komputer Lokal (Localhost)

1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/baehaqee27/katalog-lampung.git
   cd katalog-lampung
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Konfigurasi Environment:**
   Buat file bernama `.env.local` di *root directory* dan masukkan konfigurasi Firebase Anda:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY="AIzaSyD..."
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-project.firebaseapp.com"
   NEXT_PUBLIC_FIREBASE_DATABASE_URL="https://your-project-default-rtdb.firebaseio.com"
   NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project"
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-project.firebasestorage.app"
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="123456789"
   NEXT_PUBLIC_FIREBASE_APP_ID="1:123456789:web:abcdef"
   ```
   *(Harap pastikan Firebase Project Anda telah mengaktifkan **Realtime Database** dan **Google Sign-In**)*

4. **Jalankan Server Development:**
   ```bash
   npm run dev
   ```

5. Buka [http://localhost:3000](http://localhost:3000) pada browser Anda.

---
**Presented By**: Keysha Sudrajat Puteri ✨
