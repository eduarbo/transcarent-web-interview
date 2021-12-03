import React, { useState, useEffect } from 'react';
import axios from 'axios';

import List from './List';
import Spinner from './Spinner';

import './index.css';

const STORE_URL = 'https://api.jsonbin.io/v3/b/61a6855f0ddbee6f8b14dad8';
const MASTER_KEY = '$2b$10$xJgvOstI94CVbBW4RgawUu30qbNshiErQIbBKUIJp6ursGw7Nc7Du';

export default function Tree() {
  const [isLoading, setLoadingState] = useState(true);
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await axios.get(`${STORE_URL}/latest`, {
      headers: { 'X-Master-Key': MASTER_KEY },
    });
    setData(response.data.record);
    setLoadingState(false);
  };

  useEffect(() => {
    fetchData();
  }, []); // empty dependency array to only trigger on mount

  const saveData = async newData => {
    await axios.put(STORE_URL, newData, {
      headers: { 'X-Master-Key': MASTER_KEY },
    });
  };

  const updateData = newData => {
    setData(newData);
    saveData(newData);
  };

  const removeItem = path => {
    const newData = [...data];

    path.reduce((acc, pathIndex, index) => {
      if (index + 1 === path.length) {
        return acc.splice(pathIndex, 1);
      }

      return acc[pathIndex].items;
    }, newData);

    updateData(newData);
  };

  const addItem = path => event => {
    const { target, key } = event;
    if (key !== 'Enter') return;

    const newData = [...data];
    const newNode = { value: target.value };

    if (!path.length) {
      newData.push(newNode);
    } else {
      const lastNode = path.reduce((acc, pathIndex) => {
        return acc[pathIndex].items;
      }, newData);
      lastNode.push(newNode);
    }

    updateData(newData);
    target.value = '';
  };

  return (
    <div className="tree">
      {isLoading ? <Spinner /> : <List data={data} addItem={addItem} removeItem={removeItem} />}
    </div>
  );
}
