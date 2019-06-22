import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="Dashboard">

      <div className="DHeader">
          &nbsp;&nbsp;&nbsp;&nbsp;Dashboard
      </div>

      <div className="NameUser">
        <h1 className="subtitle is-3">
        &nbsp;&nbsp;&nbsp;&nbsp;Hello, Mr.John
        </h1>
      </div>

    <div className="TransactionBox">
        <p>Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date</p>
    </div>

    </div>
  );
}

export default Dashboard;
