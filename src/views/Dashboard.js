import React from 'react';
import './Dashboard.css';
import { Grid } from 'semantic-ui-react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import TranModal from '../components/TransactionModal'

export default class Dashboard extends React.Component {

  state = {
    userName: "Mr. John",
    data: [],
    modal: false
  }
  componentDidMount(){
    fetch('https://www.scbdreamteam.tk:3002/route/transaction',{
      headers:{
        "Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU2MTIwMzQ3NDExN30.rjLuUjSzipdVd8XlgqrLgU3f_DVg4Q_VW-VotlbMKow"
      }})
      .then(res => res.json())
      .then(json =>{
        this.setState({data: this.state.data.concat(json)})
      })


  }
  closeModal = () => {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    const renderLineChart = (
      <LineChart width={400} height={200} data={this.state.data} margin={{ top: 5, right: 30, bottom: 75, left: 0 }}>
        <Line type="monotone" dataKey="paidLocalAmount" stroke="#8884d8" />

        <XAxis dataKey="transDate" />
        <YAxis />
        <Tooltip />
      </LineChart>
    )
    const renderLineChart2 = (
      <LineChart width={300} height={100} data={this.state.data} margin={{ top: 5, right: 30, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="paidLocalAmount" stroke="#8884d8" />

        <XAxis dataKey="transDate" />
        <YAxis />
        <Tooltip />
      </LineChart>
    )

    return (
      <div className="Dashboard">
        {this.state.modal && <TranModal data={this.state.data} closeModal={this.closeModal} />}
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
            window.screen.availWidth > 414 ? (renderLineChart) : (renderLineChart2)
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
              this.state.data.map(e => {
                return (
                  <div id="OnHov" onClick={this.closeModal}>

                    <Grid.Row id="DRowRow" >
                      <Grid.Column width={7} >
                        <span style={{ color: "green", fontWeight: "bold" }}>{e.paidLocalAmount}.-</span>
                      </Grid.Column>
                      <Grid.Column width={1}>

                      </Grid.Column>
                      <Grid.Column width={7}>
                        {e.transDate}
                      </Grid.Column>
                    </Grid.Row>

                  </div>
                )
              })
            }

          </Grid>
        </div>

      </div>
    );
  }

}

