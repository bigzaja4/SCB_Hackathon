import React from 'react';
import './Dashboard.css';
import { Container, Row, Col, } from 'reactstrap';


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
        <Row id="DRow">
        <Col xs="4" sm="10">Amount</Col>
          <Col xs="4" sm="1">|</Col>
          <Col xs="4" sm="1">Date</Col>
        </Row>
      </div>

    </div>
  );
}

export default Dashboard;
