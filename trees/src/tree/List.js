import React from 'react';

import ListItem from './ListItem';
import './index.css';

// TODO add props validation
export default function List({ data, path = [], addItem, removeItem }) {
  if (!data) return null;

  return (
    <ol className="list">
      {Object.entries(data).map(([text, innerData]) => {
        const itemPath = [...path, text];

        return (
          <ListItem
            key={itemPath}
            text={text}
            data={innerData}
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
