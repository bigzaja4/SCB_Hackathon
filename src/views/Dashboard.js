import React from 'react';
import './Dashboard.css';
import { Grid } from 'semantic-ui-react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [{name: '13/03/62', uv: 400, pv: 2400, amt: 2400},{name: '14/03/62', uv: 100, pv: 2400, amt: 2400},{name: '14/03/62', uv: 900, pv: 2400, amt: 2400}];

export default class Dashboard extends React.Component {

  state = {
    userName: "Mr. John",
    transac: [{ amount: 360, date: "15:00 12/05/61" },
    { amount: 120, date: "15:00 12/05/61" },
    { amount: 590, date: "15:00 12/05/61" },
    { amount: 860, date: "15:00 12/05/61" },
    { amount: 860, date: "15:00 12/05/61" },
    { amount: 860, date: "15:00 12/05/61" },
    { amount: 860, date: "15:00 12/05/61" },
    { amount: 860, date: "15:00 12/05/61" },
    { amount: 860, date: "15:00 12/05/61" },
    { amount: 860, date: "15:00 12/05/61" },
    { amount: 860, date: "15:00 12/05/61" },
    { amount: 860, date: "15:00 12/05/61" },
    { amount: 860, date: "15:00 12/05/61" },
    { amount: 860, date: "15:00 12/05/61" },
    { amount: 860, date: "15:00 12/05/61" },
    { amount: 860, date: "15:00 12/05/61" },]
  }
  render() {
    const renderLineChart =(
      <LineChart width={400} height={100} data={data} margin={{ top: 5, right: 30, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    )
    const renderLineChart2 = (
      <LineChart width={300} height={100} data={data} margin={{ top: 5, right: 30, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    )
    
    return (
      <div className="Dashboard">
        {console.log(window.screen.availWidth)}
        <div className="DHeader">
          &nbsp;&nbsp;&nbsp;&nbsp;Dashboard
      </div>

        <div className="NameUser">
          <h1 className="subtitle is-3">
            &nbsp;&nbsp;&nbsp;&nbsp;Hello, {this.state.userName}
        </h1>
        </div>

        <div className="Charty">
          {
            window.screen.availWidth > 414 ?  (renderLineChart): (renderLineChart2)
          }
         
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

