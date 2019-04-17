import React, { useState, useEffect } from "react";
import axios from 'axios';

type HNResponse = {
  hits: {
    title: string;
    objectID: string;
    url: string;
  }[]
};

export const HackerNews: React.FC = () => {
  const [data, setData] = useState<HNResponse>({ hits: [] });
  const [query, setQuery] = useState('react');

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios.get<HNResponse>('https://hn.algolia.com/api/v1/search?query=' + query);
      if (!ignore) setData(result.data);
    }

    fetchData();
    return () => { ignore = true; }
  }, [query]);

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}