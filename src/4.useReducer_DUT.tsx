import { useState, useReducer, useEffect } from "react";
import axios from 'axios';

type HNResponse = {
  hits: {
    title: string;
    objectID: string;
    url: string;
  }[]
};

type State = {
  data?: HNResponse;
  isLoading: boolean;
  error?: string;
}

type Action =
  | { type: 'request' }
  | { type: 'success', results: HNResponse }
  | { type: 'failure', error: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'request':
      return { isLoading: true };
    case 'success':
      return { isLoading: false, data: action.results };
    case 'failure':
      return { isLoading: false, error: action.error };
  }
}

export const HackerNews = () => {
  const [query, setQuery] = useState('react');
  const [{
    data,
    isLoading,
    error
  }, dispatch] = useReducer(reducer, { isLoading: false });

  useEffect(() => {
    let ignore = false;

    axios(`https://hn.algolia.com/api/v1/search?query=${query}`).then(
      (results) => { if (!ignore) dispatch({ type: 'success', results: results.data }); },
      (error) => dispatch({ type: 'failure', error }),
    )

    return () => { ignore = true; }
  }, [query]);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      {isLoading && <span>Loading...</span>}
      {error && <span>Error: {error}</span>}
      <ul>
        {data && data.hits && data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}