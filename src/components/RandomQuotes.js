import React, { useEffect, useState } from 'react';
import './RandomQuotes.css';

function RandomQuotes() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=inspirational',
          {
            headers: {
              'X-Api-Key': 'e9A4Axp/ou63lDkZq9h2Ng==vcPZ9A9EOqmCOyrF',
            },
          },
        );

        if (response.ok) {
          const data = await response.json();
          setQuote(data[0].quote);
        } else {
          setError('Failed to fetch quote');
        }
      } catch (error) {
        setError('Failed to fetch quote');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="quote loading">Loading...</div>;
  }

  if (error) {
    return (
      <div className="quote error">
        Error:
        {error}
      </div>
    );
  }

  return <div className="quote">{quote}</div>;
}

export default RandomQuotes;
