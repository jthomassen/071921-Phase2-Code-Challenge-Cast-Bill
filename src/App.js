import React, { useState, useEffect } from 'react';
import BillCollection from './components/BillCollection';
import YourCast from '././components/YourCast';

const billUrl = 'http://localhost:8002/bills';

function App() {
  const [bills, setBills] = useState([])

  useEffect(() => {
    fetch(billUrl)
      .then((res) => res.json())
      .then(setBills);
  }, [] )

  // Tried doing a POST request here, couldn't get this to work :(

  // function castBill(bill, id) {

  //   const addCastArr = 
  //     bills.map((bill) => bill.id === id ? {...bill, cast: true} : bill)

  //   fetch(billUrl, {
  //     method: 'POST',
  //     body: JSON.stringify(bill),
  //     headers: {
  //       Accepts: 'application/json',
  //       'Content-type': 'application/json',
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((json) => setBills(
  //       [...addCastArr, json ]
  //     ))
  // };

  function castBill(id) {
    setBills(
        bills.map((bill) => bill.id === id ? {...bill, cast: true} : bill)
      )
  };

  function releaseBill(id) {
    setBills(bills.map((bill) => bill.id === id ? {...bill, cast: false} : bill))
  };

  // BUT I was able to get the DELETE request up and running :)

  function fireBill(id) {
    fetch(`${billUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        Accepts: 'application/json',
        'Content-type': 'application/json',
      }
    }).then(() => setBills(bills.filter((bill) => bill.id !== id)))
  };

  
  return (
    <div>
      <YourCast
        bills={bills.filter((bill) => bill.cast)}
        handleClick={releaseBill}
        handleFire={fireBill}
        />
      <BillCollection
        bills={bills}
        handleClick={castBill}
        handleFire={fireBill}
      />
    </div>
  );
  
}

export default App;
