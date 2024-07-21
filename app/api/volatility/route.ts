import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
    const tickDataPath = path.join(process.cwd(), 'public', 'volatility_tick.json');
    const historicalDataPath = path.join(process.cwd(), 'public', 'volatility_historical.json');

    const tickData = JSON.parse(await fs.readFile(tickDataPath, 'utf8'));
    const historicalData = JSON.parse(await fs.readFile(historicalDataPath, 'utf8'));

    return NextResponse.json({ tick: tickData, historical: historicalData });
}
