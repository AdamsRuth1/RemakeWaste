import React from 'react';

function Card({children,className}) {
  return (
    <div className={`${className} group rounded-lg bg-brand-100 cursor-pointer drop-shadow-2xl p-3`}>
      {children}
    </div>
  );
}

export default Card;
