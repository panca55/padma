# Konfigurasi Google Sheets untuk Menyimpan Data Form Partner (Vercel)

## Langkah-langkah Setup:

### 1. Buat Google Sheet
- Buka Google Sheets dan buat spreadsheet baru
- Beri nama spreadsheet, misalnya "Partner Form Submissions"
- Di baris pertama (header), masukkan kolom:
  - A1: Timestamp
  - B1: Name
  - C1: Email
  - D1: Project
  - E1: Project Scope

### 2. Dapatkan Google Sheets API Key
1. Buka [Google Cloud Console](https://console.cloud.google.com/)
2. Buat project baru atau pilih project yang sudah ada
3. Enable Google Sheets API:
   - Pergi ke "APIs & Services" > "Library"
   - Cari "Google Sheets API"
   - Klik "Enable"
4. Buat API Key:
   - Pergi ke "APIs & Services" > "Credentials"
   - Klik "Create Credentials" > "API Key"
   - Copy API Key yang dibuat

### 3. Share Google Sheet
1. Buka Google Sheet yang sudah dibuat
2. Klik "Share" di pojok kanan atas
3. Ubah permission menjadi "Anyone with the link can edit"
4. Copy Sheet ID dari URL (bagian antara `/d/` dan `/edit`)
   - Contoh: `https://docs.google.com/spreadsheets/d/1ABC123.../edit`
   - Sheet ID: `1ABC123...`

### 4. Setup Environment Variables di Vercel
1. Login ke [Vercel Dashboard](https://vercel.com/dashboard)
2. Pilih project Anda (atau import dari GitHub)
3. Pergi ke "Settings" > "Environment Variables"
4. Tambahkan 2 environment variables:
   - `GOOGLE_SHEET_ID`: Masukkan Sheet ID yang sudah dicopy
   - `GOOGLE_SHEETS_API_KEY`: Masukkan API Key yang sudah dibuat
5. Set untuk semua environments (Production, Preview, Development)

### 5. Deploy ke Vercel
1. **Via Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Via GitHub Integration:**
   - Connect repository ke Vercel
   - Auto-deploy setiap push ke main branch

3. **Manual Upload:**
   - Zip project folder
   - Upload via Vercel dashboard

### 6. Test Form
1. Akses website yang sudah di-deploy
2. Pergi ke halaman `/partner`
3. Isi dan submit form
4. Cek Google Sheet, data akan otomatis tersimpan

## **Cara Deploy ke Vercel:**

### Option 1: Via GitHub (Recommended)
1. Push code ke GitHub repository
2. Login ke [vercel.com](https://vercel.com)
3. Klik "New Project"
4. Import dari GitHub repository
5. Set environment variables di Vercel dashboard
6. Deploy

### Option 2: Via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

### Option 3: Drag & Drop
1. Build project: `npm run build`
2. Upload folder `dist` ke Vercel dashboard

## File Konfigurasi Vercel:
- `vercel.json`: Konfigurasi API routes dan rewrites
- `api/submit-partner.ts`: Serverless function untuk handle form submission

## Struktur Data di Spreadsheet:
| Timestamp | Name | Email | Project | Project Scope |
|-----------|------|-------|---------|---------------|
| 2024-12-01 10:30:00 | John Doe | john@example.com | Web App | Building e-commerce platform |

## Catatan Keamanan:
- API Key memiliki akses terbatas hanya untuk Google Sheets
- Gunakan environment variables untuk menyimpan credential
- Jangan commit API key ke repository

## Troubleshooting:
- Pastikan Google Sheets API sudah enabled
- Pastikan Sheet ID dan API Key sudah benar di environment variables
- Pastikan spreadsheet bisa diakses publik (anyone with link can edit)