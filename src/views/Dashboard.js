import React from 'react';
import './Dashboard.css';
import { Grid, Image } from 'semantic-ui-react'

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
        <Grid id="DGrid" columns={3}>
          <Grid.Row id="DRow">
            <Grid.Column width={7}>
              Amount
            </Grid.Column>
            <Grid.Column width={1}>
              |
            </Grid.Column>
            <Grid.Column width={7}>
              Date
            </Grid.Column>
          </Grid.Row>
          </Grid>
      </div>

      </div>
      );
    }
    
    export default Dashboard;
