# Setup Google Sheets dengan Google Apps Script (Vercel Compatible)

Error 401 terjadi karena Google Sheets API tidak mendukung API key untuk write operations. Solusi terbaik adalah menggunakan Google Apps Script sebagai webhook.

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

### 2. Buat Google Apps Script
1. Di Google Sheet, klik **Extensions** > **Apps Script**
2. Hapus kode default dan paste kode berikut:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSheet();
    
    // Get form data
    var timestamp = e.parameter.timestamp || new Date().toLocaleString();
    var name = e.parameter.name;
    var email = e.parameter.email;
    var project = e.parameter.project;
    var projectScope = e.parameter.projectScope;
    
    // Append data to sheet
    sheet.appendRow([timestamp, name, email, project, projectScope]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'Data saved successfully'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. **Save** project dengan nama "Partner Form Handler"

### 3. Deploy Apps Script sebagai Web App
1. Klik **Deploy** > **New deployment**
2. Pilih type: **Web app**
3. Set configuration:
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Klik **Deploy**
5. **Copy Web app URL** yang diberikan

### 4. Update Environment Variable di Vercel
1. Login ke Vercel Dashboard
2. Go to project Settings > Environment Variables
3. Add/Update:
   - **Key**: `GOOGLE_APPS_SCRIPT_WEBHOOK`
   - **Value**: Web app URL yang di-copy dari step 3
   - **Environments**: Production, Preview, Development

### 5. Test dan Deploy
1. Push code ke repository
2. Vercel akan auto-deploy
3. Test form di `/partner`
4. Data akan tersimpan ke Google Sheet otomatis

## Keuntungan Google Apps Script:
- ✅ No API key needed
- ✅ Direct access ke Google Sheets  
- ✅ Built-in authentication
- ✅ Free dan reliable
- ✅ No quota limits untuk basic usage

## Troubleshooting:
- Pastikan Apps Script di-deploy dengan akses "Anyone"
- Pastikan webhook URL sudah benar di environment variables
- Check function logs di Vercel untuk debugging

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