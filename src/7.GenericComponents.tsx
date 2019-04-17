import React from 'react';

interface ListProps<T> {
  items: {
    label: string;
    value: T;
  }[];
  onItemSelected: (item: T) => void;
}

// export const List = <T>(props): React.FunctionComponent<ListProps<T>> => ({});

export const List = function <T>({ items, onItemSelected }: ListProps<T>) {
  return (
    <ul>
      {items.map(item =>
        <li onClick={() => onItemSelected(item.value)}>{item.label}</li>)}
    </ul>
  );
};

export const Wrapper: React.FunctionComponent = () =>
  <List
    items={[{ label: 'test', value: 5 }]}
    onItemSelected={(item) => { console.log(item); }} />

