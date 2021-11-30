import React from 'react';

import ListItem from './ListItem';
import './index.css';

// TODO add props validation
export default function List({ data, path = [], addItem, removeItem }) {
  const entries = data ? Object.entries(data) : [];

  if (!entries.length) return null;

  return (
    <ol className="list">
      {entries.map(([text, innerData]) => {
        const itemPath = [...path, text];

        return (
          <ListItem
            key={itemPath}
            text={text}
            path={itemPath}
            addItem={addItem}
            removeItem={removeItem}
          >
            <List data={innerData} path={itemPath} addItem={addItem} removeItem={removeItem} />
          </ListItem>
        );
      })}
      <input
        onKeyDown={addItem(path)}
        className="form-control form-control-sm add-item-input"
        placeholder="Add another animal"
        type="text"
      />
    </ol>
  );
}
