import React from 'react';

import './index.css';

export default function Tree() {
  return (
    <ol className="tree">
      <li>
        root
        <ol>
          <li>ant</li>
          <li>
            bear
            <ol>
              <li>cat</li>
              <li>
                dog
                <ol>
                  <li>elephant</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>frog</li>
        </ol>
      </li>
    </ol>
  );
}
