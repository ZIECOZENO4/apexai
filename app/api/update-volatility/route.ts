import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import path from 'path';

export async function GET() {
    const scriptPath = path.join(process.cwd(), 'fetch_volatility_data.py');
    
    try {
        await new Promise((resolve, reject) => {
            exec(`python ${scriptPath}`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    reject(error);
                }
                console.log(`stdout: ${stdout}`);
                console.error(`stderr: ${stderr}`);
                resolve(stdout);
            });
        });

        return NextResponse.json({ message: 'Volatility data updated successfully' });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to update volatility data', error }, { status: 500 });
    }
}
