'use client';

import React, { useEffect, useState } from 'react';

interface NewsArticle {
  article_title: string;
  article_url: string;
  article_photo_url: string;
  source: string;
  post_time_utc: string;
}

interface ForexNewsWidgetProps {
  currency: string;
}

const ForexNewsWidget: React.FC<ForexNewsWidgetProps> = ({ currency }) => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const formattedCurrency = currency.includes('/') ? currency.replace('/', '_') : `${currency.slice(0, 3)}_${currency.slice(3)}`;
        const response = await fetch(`/api/currency-news?currency=${formattedCurrency}`);

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();

        if (!data || !data.data || !Array.isArray(data.data.news)) {
          throw new Error('Invalid data format');
        }

        setNews(data.data.news);
      } catch (err) {
        if (err instanceof Error) {
          setError(`Failed to fetch news: ${err.message}`);
        } else {
          setError('Failed to fetch news: An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [currency]);

  if (loading) {
    return <p>Loading {currency} news...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="news-widget my-24 mx-4">
      <h2 className="text-xl font-bold mb-4 font-serif text-center text-blue-800 uppercase">Trending News For {currency}</h2>
      {news.length > 0 ? (
        <ul>
          {news.map((article, index) => (
            <li key={index} className="mb-8 gap-8">
              <a href={article.article_url} target="_blank" rel="noopener noreferrer">
                <div>
                  <h3 className="text-md font-semibold my-2">{article.article_title}</h3>
                  <img src={article.article_photo_url} alt={article.article_title} className="w-full h-32 object-cover " />
                  <p className='text-sm my-2'>Source: <span className='hover:underline'>{article.source}</span> </p>
                  <span className="text-xs text-blue-800">{new Date(article.post_time_utc).toLocaleString()}</span>
                  <hr />
                </div>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No news articles for {currency} available.</p>
      )}
    </div>
  );
};

export default ForexNewsWidget;
