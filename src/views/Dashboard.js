import React from 'react';
import './Dashboard.css';
import { Grid } from 'semantic-ui-react'

export default class Dashboard extends React.Component {

  state = {
    transac: [{ amount: 360, date: "15:00 12/05/61" },
    { amount: 120, date: "15:00 12/05/61" },
    { amount: 590, date: "15:00 12/05/61" },
    { amount: 860, date: "15:00 12/05/61" },
    { amount: 860, date: "15:00 12/05/61" },
    { amount: 860, date: "15:00 12/05/61" },
    { amount: 860, date: "15:00 12/05/61" },
    { amount: 860, date: "15:00 12/05/61" },]
  }
  render() {
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

              </Grid.Column>
              <Grid.Column width={7}>
                Date
            </Grid.Column>
            </Grid.Row>
            {
              this.state.transac.map(e => {
                return (
                  <Grid.Row id="DRowRow">
                    <Grid.Column width={7}>
                      <span style={{color:"green",fontWeight:"bold"}}>{e.amount}.-</span>
              </Grid.Column>
                    <Grid.Column width={1}>

                    </Grid.Column>
                    <Grid.Column width={7}>
                      {e.date}
              </Grid.Column>
                  </Grid.Row>
                )
              })
            }

          </Grid>
        </div>

      </div>
    );
  }

}

