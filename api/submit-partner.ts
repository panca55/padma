import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Google Sheets API configuration
    const SHEET_ID = process.env.GOOGLE_SHEET_ID;
    const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;
    const RANGE = 'Sheet1!A:E';

    if (!SHEET_ID || !API_KEY) {
      return NextResponse.json(
        { error: 'Missing Google Sheets configuration' },
        { status: 500 }
      );
    }

    // Prepare the data for Google Sheets
    const values = [
      [
        new Date().toLocaleString(),
        data.name,
        data.email,
        data.project,
        data.projectScope
      ]
    ];

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}:append?valueInputOption=USER_ENTERED&key=${API_KEY}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: values
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Google Sheets API error:', error);
      throw new Error('Failed to submit to Google Sheets');
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Data submitted successfully' 
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}