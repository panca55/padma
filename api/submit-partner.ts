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
    console.log('Request body:', req.body);
    const data = req.body;
    
    // Validate required fields
    if (!data.name || !data.email || !data.project || !data.projectScope) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Webhook URL untuk Google Apps Script
    const WEBHOOK_URL = process.env.GOOGLE_APPS_SCRIPT_WEBHOOK || "https://script.google.com/macros/s/AKfycbx0VWHt6N8UGLs_n8vNHc-Kup8bW4hZV0GbP6CJOHY_0M1yS-fX9RJNfMIQ8Uz_rjwW/exec";
    
    console.log('Sending to Google Apps Script webhook...');

    // Prepare the data
    const formData = new URLSearchParams();
    formData.append('timestamp', new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('project', data.project);
    formData.append('projectScope', data.projectScope);

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    });

    const responseText = await response.text();
    console.log('Google Apps Script response:', { status: response.status, body: responseText });

    if (!response.ok) {
      console.error('Google Apps Script error:', responseText);
      return res.status(500).json({ 
        error: 'Failed to submit to Google Sheets',
        details: responseText
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Data submitted successfully' 
    });

  } catch (error) {
    console.error('Detailed error:', error);
    return res.status(500).json({ 
      error: 'Internal Server Error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}