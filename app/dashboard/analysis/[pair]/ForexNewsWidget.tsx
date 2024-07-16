"use client"

import React, { useEffect, useState } from 'react';

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  urlToImage: string | null;
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
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${currency}&language=en&apiKey=7da74f6622cf4f4d85593a1ff47ffcf9`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (!data.articles || !Array.isArray(data.articles)) {
          throw new Error('Invalid data format');
        }

        setNews(data.articles);
      } catch (err) {
        setError('Failed to fetch news.');
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
    <div className="news-widget my-10 mb-24 mt-14">
      <h2 className="text-xl font-bold mb-4 font-serif text-center">Trending News For {currency}</h2>
      {news.length > 0 ? (
        <ul>
          {news.map((article, index) => (
            <li key={index} className="mb-8 gap-4">
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
        <p>No news articles for {currency} available.</p>
      )}
    </div>
  );
};

export default ForexNewsWidget;
