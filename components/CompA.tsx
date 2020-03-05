import React from 'react';
import { button } from './CompA.css';
import styles from '../global.css';
import { CompB } from './CompB';

export const CompA = () => {
  return (
    <div className="comp">
      <CompB />
      <button>Component A</button>
      <div>Some Text</div>
      <hr />

      {/* STYLES */}
      <style jsx>{button}</style>
      <style jsx>{styles}</style>
      <style jsx>{styles}</style>
    </div>
  );
};
