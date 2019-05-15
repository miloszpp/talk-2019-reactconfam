import React, { useState, useEffect } from "react";
import axios from 'axios';

type ServerResponse = {
  items: {
    title: string;
    id: string;
    url: string;
  }[]
};

export const HackerNews: React.FC = () => {
  const [data, setData] = useState<ServerResponse>({ items: [] });
  const [query, setQuery] = useState('conference');

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios.get<ServerResponse>(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=${query}&format=json`);
      if (!ignore) setData(result.data);
    }

    fetchData();
    return () => { ignore = true; }
  }, [query]);

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {data.items.map(item => (
          <li key={item.id}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}