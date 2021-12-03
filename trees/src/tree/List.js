import React from 'react';

import ListItem from './ListItem';
import './index.css';

// TODO add props validation
export default function List({ data, path = [], addItem, removeItem }) {
  const entries = data || [];

  if (!entries.length) return null;

  return (
    <ol className="list">
      {entries.map((node, index) => {
        const { value, items } = node;
        const itemPath = [...path, index];

        return (
          <ListItem
            key={itemPath}
            text={value}
            path={itemPath}
            addItem={addItem}
            removeItem={removeItem}
          >
            <List data={items} path={itemPath} addItem={addItem} removeItem={removeItem} />
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
