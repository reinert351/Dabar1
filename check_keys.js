console.log('Keys in process.env:', Object.keys(process.env).filter(k => k.includes('KEY') || k.includes('API')));
console.log('GEMINI_API_KEY:', process.env.GEMINI_API_KEY ? 'SET' : 'NOT SET');
console.log('API_KEY:', process.env.API_KEY ? 'SET' : 'NOT SET');
