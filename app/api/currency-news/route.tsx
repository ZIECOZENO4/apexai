// import { NextResponse } from 'next/server';
// import https from 'https';

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const currency = searchParams.get('currency');

//   if (!currency) {
//     return NextResponse.json({ error: 'Currency pair is required' }, { status: 400 });
//   }

//   const [from_symbol, to_symbol] = currency.split('_');

//   const fetchCurrencyNews = (from_symbol: string, to_symbol: string): Promise<any> => {
//     const options = {
//       method: 'GET',
//       hostname: 'real-time-finance-data.p.rapidapi.com',
//       port: null,
//       path: `/currency-news?from_symbol=${from_symbol}&language=en&to_symbol=${to_symbol}`,
//       headers: {
//         'x-rapidapi-key': process.env.RAPIDAPI_KEY!,
//         'x-rapidapi-host': 'real-time-finance-data.p.rapidapi.com'
//       }
//     };

//     return new Promise((resolve, reject) => {
//       const req = https.request(options, (res) => {
//         const chunks: any[] = [];

//         res.on('data', (chunk) => {
//           chunks.push(chunk);
//         });

//         res.on('end', () => {
//           const body = Buffer.concat(chunks);
//           resolve(JSON.parse(body.toString()));
//         });
//       });

//       req.on('error', (e) => {
//         reject(e);
//       });

//       req.end();
//     });
//   };

//   try {
//     const data = await fetchCurrencyNews(from_symbol, to_symbol);
//     return NextResponse.json(data);
//   } catch (error) {
//     console.error('Error fetching currency news:', error);
//     return NextResponse.json({ error: 'Failed to fetch currency news' }, { status: 500 });
//   }
// }


import { NextResponse } from 'next/server';
import https from 'https';

type CacheEntry = {
  data: any;
  timestamp: number;
};

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const cache: Record<string, CacheEntry> = {};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const currency = searchParams.get('currency');

  if (!currency) {
    return NextResponse.json({ error: 'Currency pair is required' }, { status: 400 });
  }

  const [from_symbol, to_symbol] = currency.split('_');
  const cacheKey = `${from_symbol}_${to_symbol}`;

  // Check if the data is in the cache and hasn't expired
  const cachedEntry = cache[cacheKey];
  const now = Date.now();
  if (cachedEntry && (now - cachedEntry.timestamp < CACHE_DURATION)) {
    return NextResponse.json(cachedEntry.data);
  }

  const fetchCurrencyNews = (from_symbol: string, to_symbol: string): Promise<any> => {
    const options = {
      method: 'GET',
      hostname: 'real-time-finance-data.p.rapidapi.com',
      port: null,
      path: `/currency-news?from_symbol=${from_symbol}&language=en&to_symbol=${to_symbol}`,
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY!,
        'x-rapidapi-host': 'real-time-finance-data.p.rapidapi.com'
      }
    };

    return new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        const chunks: any[] = [];

        res.on('data', (chunk) => {
          chunks.push(chunk);
        });

        res.on('end', () => {
          const body = Buffer.concat(chunks);
          if (res.statusCode !== 200) {
            reject(new Error(`Failed to fetch data, status code: ${res.statusCode}`));
          } else {
            resolve(JSON.parse(body.toString()));
          }
        });
      });

      req.on('error', (e) => {
        reject(e);
      });

      req.end();
    });
  };

  try {
    const data = await fetchCurrencyNews(from_symbol, to_symbol);

    // Store the fetched data in the cache
    cache[cacheKey] = { data, timestamp: now };
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching currency news:', error);
    return NextResponse.json({ error: 'Failed to fetch currency news' }, { status: 500 });
  }
}
