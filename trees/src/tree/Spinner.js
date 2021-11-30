import React from 'react';

import './index.css';

export default function Spinner() {
  return (
    <div className="spinner">
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
