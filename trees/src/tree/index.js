import React from 'react';

import './index.css';

export default function Tree() {
  return (
    <ul className="tree">
      <li>
        root
        <ul>
          <li>ant</li>
          <li>
            bear
            <ul>
              <li>cat</li>
              <li>
                dog
                <ul>
                  <li>elephant</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>frog</li>
        </ul>
      </li>
    </ul>
  );
}
