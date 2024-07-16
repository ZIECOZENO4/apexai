'use client';

import React, { useEffect, useState } from 'react';

const forexPairs = [
  "EURUSD", "USDJPY", "GBPUSD", "AUDUSD", "USDCAD", "USDCHF", "NZDUSD",
  "EURGBP", "EURJPY", "GBPJPY", "AUDJPY", "AUDNZD", "NZDJPY", "EURAUD",
  "EURCHF", "CHFJPY", "CADJPY", "GBPAUD", "GBPCAD", "GBPCHF", "AUDCAD",
  "AUDCHF", "NZDCAD", "NZDCHF", "EURCAD", "EURNZD", "CADCHF", "USDHKD",
  "USDSGD", "USDZAR", "USDMXN", "USDTRY", "USDNOK", "USDSEK", "USDDKK",
  "USDPLN", "USDCNY", "USDINR", "USDTHB", "USDSAR", "USDILS", "USDIDR",
  "USDHUF", "USDKRW", "USDCZK", "USDCLP", "USDARS", "USDVEF", "USDVND"
];

interface NewsArticle {
  article_title: string;
  article_url: string;
  article_photo_url: string;
  source: string;
  post_time_utc: string;
}

const TrendingForexNews: React.FC = () => {
  const [news, setNews] = useState<{ [key: string]: NewsArticle[] }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        const newsPromises = forexPairs.map(pair => {
          const formattedCurrency = pair.slice(0, 3) + '_' + pair.slice(3);
          return fetch(`/api/currency-news?currency=${formattedCurrency}`)
            .then(response => response.json())
            .then(data => ({ pair, news: data.data.news }))
            .catch(() => ({ pair, news: [] }));
        });

        const results = await Promise.all(newsPromises);
        const newsData = results.reduce((acc, { pair, news }) => {
          acc[pair] = news;
          return acc;
        }, {} as { [key: string]: NewsArticle[] });

        setNews(newsData);
      } catch (err) {
        setError('Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };

    fetchAllNews();
  }, []);

  if (loading) {
    return <p>Loading trending forex news...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="trending-news-widget mb-24">
      {forexPairs.map((pair) => (
        news[pair] && news[pair].length > 0 && (
          <div key={pair} className="pair-news mb-8">
            <ul>
              {news[pair].map((article, index) => (
                <li key={index} className="mb-8 gap-8 text-left">
                  <a href={article.article_url} target="_blank" rel="noopener noreferrer" className="flex gap-4">
                    <div>
                      <h4 className="font-medium text-md my-2">{article.article_title}</h4>
                      <img src={article.article_photo_url} alt={article.article_title} className="w-full h-32 object-cover" />
                      <p className='text-sm my-2 text-slate-400'>Source: <span className='hover:underline'>{article.source}</span> </p>
                      <span className="text-xs text-blue-800">{new Date(article.post_time_utc).toLocaleString()}</span>
                      <hr />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )
      ))}
    </div>
  );
};

export default TrendingForexNews;
