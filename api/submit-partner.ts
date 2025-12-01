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
    
    // Google Sheets API configuration
    const SHEET_ID = process.env.GOOGLE_SHEET_ID || "1B98EgvA1IlxD_eVzWrtITizzlTm2FXyxDtVhhuFoyZM";
    const API_KEY = process.env.GOOGLE_SHEETS_API_KEY || "AIzaSyBNFxjqlf9io2OcS3Q9KCG3AFzOQaQ3cS8";
    const RANGE = 'Sheet1!A:E';

    console.log('Environment variables check:', { 
      hasSheetId: !!SHEET_ID, 
      hasApiKey: !!API_KEY 
    });

    if (!SHEET_ID || !API_KEY) {
      return res.status(500).json({ 
        error: 'Missing Google Sheets configuration',
        details: 'GOOGLE_SHEET_ID and GOOGLE_SHEETS_API_KEY must be set'
      });
    }

    // Prepare the data for Google Sheets
    const values = [
      [
        new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }),
        data.name,
        data.email,
        data.project,
        data.projectScope
      ]
    ];

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}:append?valueInputOption=USER_ENTERED&key=${API_KEY}`;

    console.log('Sending to Google Sheets:', { url: url.replace(API_KEY, '[HIDDEN]'), values });

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: values
      })
    });

    const responseText = await response.text();
    console.log('Google Sheets response:', { status: response.status, body: responseText });

    if (!response.ok) {
      console.error('Google Sheets API error:', responseText);
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