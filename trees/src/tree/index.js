import React from 'react';

import data from './data.json';

import './index.css';

const renderItem = ([text, children]) => {
  return (
    <li key={text}>
      {text}
      {children ? <ol>{Object.entries(children).map(renderItem)}</ol> : null}
    </li>
  );
};

export default function Tree() {
  return <ol className="tree">{Object.entries(data).map(renderItem)}</ol>;
}
