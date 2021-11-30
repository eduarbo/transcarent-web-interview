import React from 'react';

import './index.css';

// TODO add props validation
export default function ListItem({ text, children, path, addItem, removeItem }) {
  return (
    <li className="list-item">
      {text}
      <button
        onClick={() => removeItem(path)}
        type="button"
        className="close remove-icon"
        aria-label="Remove"
      >
        <span aria-hidden="true">❌</span>
      </button>
      {children}
    </li>
  );
}
