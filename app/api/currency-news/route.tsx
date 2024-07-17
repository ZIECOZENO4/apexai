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
import Redis from 'ioredis';

const REDIS_URL = process.env.REDIS_URL;

if (!REDIS_URL) {
  throw new Error('REDIS_URL is not defined in the environment variables');
}

const redis = new Redis(REDIS_URL);

type CacheEntry = {
  data: any;
  timestamp: number;
};

const CACHE_DURATION = 24 * 60 * 60; // 24 hours in seconds

async function getFromCache(key: string) {
  const data = await redis.get(key);
  return data ? JSON.parse(data) : null;
}

async function setInCache(key: string, value: any, ttl: number) {
  await redis.set(key, JSON.stringify(value), 'EX', ttl);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const currency = searchParams.get('currency');

  if (!currency) {
    return NextResponse.json({ error: 'Currency pair is required' }, { status: 400 });
  }

  const [from_symbol, to_symbol] = currency.split('_');
  const cacheKey = `${from_symbol}_${to_symbol}`;

  // Check if the data is in the cache
  const cachedData = await getFromCache(cacheKey);
  if (cachedData) {
    return NextResponse.json(cachedData);
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
          resolve(JSON.parse(body.toString()));
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
    await setInCache(cacheKey, data, CACHE_DURATION);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching currency news:', error);
    return NextResponse.json({ error: 'Failed to fetch currency news' }, { status: 500 });
  }
}
