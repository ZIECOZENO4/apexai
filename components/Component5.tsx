"use client";

import React, { useEffect, useState } from 'react';

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
}

const Component5: React.FC = () => {
  const [forexNews, setForexNews] = useState<NewsArticle[]>([]);
  const [cryptoNews, setCryptoNews] = useState<NewsArticle[]>([]);
  const [stockNews, setStockNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async (query: string, setNews: React.Dispatch<React.SetStateAction<NewsArticle[]>>) => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&apiKey=YOUR_NEWSAPI_KEY`
        );
        const data = await response.json();

        if (data.articles) {
          setNews(data.articles);
        } else {
          setError(`No ${query} news articles found.`);
        }
      } catch (err) {
        setError(`Failed to fetch ${query} news.`);
      } finally {
        setLoading(false);
      }
    };

    fetchNews('forex', setForexNews);
    fetchNews('cryptocurrency', setCryptoNews);
    fetchNews('stock market', setStockNews);
  }, []);

  if (loading) {
    return <p>Loading news...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const renderNews = (news: NewsArticle[], category: string) => (
    <div className="news-category mb-8 gap-4">
      {news.length > 0 ? (
        <ul>
          {news.map((article, index) => (
            <li key={index} className="mb-4">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-48 object-cover mb-2"
                  />
                )}
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p>{article.description}</p>
                <span className="text-sm text-blue-800">{new Date(article.publishedAt).toLocaleString()}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No news articles available.</p>
      )}
    </div>
  );

  return (
    <div className="news-widget container mx-auto p-4">
      {renderNews(forexNews, 'Forex')}
      {renderNews(cryptoNews, 'Crypto')}
      {renderNews(stockNews, 'Stock Market')}
    </div>
  );
};

export default Component5;
