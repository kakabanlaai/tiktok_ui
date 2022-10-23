import React from 'react';
import Header from './Header';

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
}

export default HeaderOnly;
