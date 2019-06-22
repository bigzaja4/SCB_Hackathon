import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Form, Grid, Message } from 'semantic-ui-react'
import { Color } from '../utils'
import './Login.css'
import appLogo from '../assets/zync.png'

const Container = styled.div`
  background-color: #f0f6ff;
  width: 100%;
  height: 100vh;
`

export default class extends Component {
  state = {
    username: "",
    password: ""
  }

  componentDidMount() {
    // MARK: Check Token
  }

  _handleLoginCLick = async() => {
    console.log(this.state.username+"------"+this.state.password)
    let data = await fetch('https://www.scbdreamteam.tk:3002/route/login',{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    console.log(data)
    
    // this.props.history.push('/home')
  }

  render() {
    return (
      <Container>
        <Grid textAlign='center' style={{ height: '100vh', margin: 0 }} verticalAlign='middle'>
          <Grid.Column className="LoginBox">
          <img style={{width: '99px',paddingBottom:'7px'}} src={appLogo} />
          <h2 style={{paddingBottom:'4px'}}>Zync</h2>
          <Form size='large'>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='username' onChange={(e)=>{this.setState({username: e.target.value})}} />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange={(e)=>{this.setState({password: e.target.value})}}
            />
            <Button 
              color='violet' 
              fluid 
              size='large'
              onClick={this._handleLoginCLick}
            >
              Login
            </Button>
          </Form>
          <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </Container>
    )
  }
}