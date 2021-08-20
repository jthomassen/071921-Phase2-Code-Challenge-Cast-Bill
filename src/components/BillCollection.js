import React from 'react';
import BillCard from './BillCard.js';

function BillCollection({bills, handleClick, handleFire}) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {bills.map((bill) => (
          <BillCard
            key={bill.id}
            bill={bill}
            handleClick={handleClick}
            handleFire={handleFire}
          />
        ))}
      </div>
    </div>
  );
}

export default BillCollection
