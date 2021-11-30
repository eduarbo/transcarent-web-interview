import { set, unset } from 'lodash';
import React, { useState } from 'react';

import initialData from './data.json';
import List from './List';

import './index.css';

export default function Tree() {
  const [data, setData] = useState(initialData);

  const removeItem = path => {
    const newData = { ...data };
    unset(newData, path);
    setData(newData);
  };

  const addItem = path => event => {
    const { target, key } = event;
    if (key !== 'Enter') return;

    const newData = { ...data };
    set(newData, [...path, target.value]);
    setData(newData);
    target.value = '';
  };

  return (
    <div className="tree">
      <List data={data} addItem={addItem} removeItem={removeItem} />
    </div>
  );
}
