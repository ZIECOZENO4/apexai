"use client"
import { useEffect, useState } from 'react';

interface TickData {
    bid: number;
    ask: number;
    last: number;
}

interface HistoricalData {
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
}

const VolatilityData = () => {
    const [data, setData] = useState<{ tick: TickData | null; historical: HistoricalData[] }>({ tick: null, historical: [] });
    const [loading, setLoading] = useState(false);

    const fetchVolatilityData = async () => {
        setLoading(true);
        try {
            await fetch('/api/update-volatility');
            const response = await fetch('/api/volatility');
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Failed to fetch volatility data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVolatilityData();
    }, []);

    return (
        <div>
            <h1>Volatility Data</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {data.tick && (
                        <div>
                            <h2>Current Tick Data</h2>
                            <p>Bid: {data.tick.bid}</p>
                            <p>Ask: {data.tick.ask}</p>
                            <p>Last: {data.tick.last}</p>
                        </div>
                    )}
                    {data.historical.length > 0 && (
                        <div>
                            <h2>Historical Data</h2>
                            <ul>
                                {data.historical.map((item, index) => (
                                    <li key={index}>
                                        {item.time}: Open: {item.open}, High: {item.high}, Low: {item.low}, Close: {item.close}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default VolatilityData;
