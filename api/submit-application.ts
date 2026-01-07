import { IncomingForm } from 'formidable';
import fs from 'fs';
import FormData from 'form-data';

export const config = {
  api: {
    bodyParser: false, // Disable default body parser to handle multipart/form-data
  },
};

export default async function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).json({ message: 'OK' });
  }

  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Parse multipart/form-data
    const form = new IncomingForm();
    
    const parseForm = () => new Promise<{ fields: any; files: any }>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    const { fields, files } = await parseForm();

    // Get field values (formidable returns arrays)
    const getValue = (field: any) => Array.isArray(field) ? field[0] : field;

    const name = getValue(fields.name);
    const email = getValue(fields.email);
    const phone = getValue(fields.phone);
    const address = getValue(fields.address);
    
    // Validate required fields
    if (!name || !email || !phone || !address) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Prepare FormData for backend API
    const backendFormData = new FormData();
    backendFormData.append('name', name);
    backendFormData.append('address', address);
    backendFormData.append('phone', phone);
    backendFormData.append('email', email);
    backendFormData.append('last_highest_education', getValue(fields.last_highest_education) || '');
    backendFormData.append('salary_expectation', getValue(fields.salary_expectation) || '');
    backendFormData.append('previous_job', getValue(fields.previous_job) || '');
    backendFormData.append('age', getValue(fields.age) || '');
    backendFormData.append('karir_id', getValue(fields.karir_id) || '');
    backendFormData.append('user_id', getValue(fields.user_id) || '');
    
    // Handle CV file
    const cvFile = files.cv ? (Array.isArray(files.cv) ? files.cv[0] : files.cv) : null;
    if (cvFile && cvFile.filepath) {
      const fileStream = fs.createReadStream(cvFile.filepath);
      backendFormData.append('cv', fileStream, {
        filename: cvFile.originalFilename || 'cv.pdf',
        contentType: cvFile.mimetype || 'application/pdf',
      });
    }

    // Forward request to the actual backend API
    const response = await fetch('https://www.admin.padmaraharjasentosa.co.id/api/v1/applications', {
      method: 'POST',
      body: backendFormData,
      headers: backendFormData.getHeaders(),
    });

    const result = await response.json();

    // Clean up uploaded file
    if (cvFile && cvFile.filepath) {
      fs.unlinkSync(cvFile.filepath);
    }

    if (!response.ok) {
      return res.status(response.status).json(result);
    }

    return res.status(200).json(result);
  } catch (error: any) {
    console.error('Error submitting application:', error);
    return res.status(500).json({ 
      error: 'Internal Server Error',
      message: error.message 
    });
  }
}
