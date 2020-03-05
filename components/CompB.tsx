import React from 'react';
import styles, { button } from './CompB.css';

export const CompB = () => {
  return (
    <div className="root">
      <h4>Comp B</h4>
      <div className="x1">Using rem unit (relative to root)</div>
      <div className="x2">Using em unit (relative to parent)</div>
      <button>Click B</button>

      {/* STYLES */}
      <style jsx>{styles}</style>
      <style jsx>{button}</style>
    </div>
  );
};
