import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Color } from '../utils'

const Container = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 52.6%, ${() => Color.secondary} 100%), ${() => Color.primary};
  width: 100%
  height: 100vh;
`

const InputGroup = styled.div`
  background-color: ${Color.background};
  position: absolute;
  left: 36px;
  top: 316px;
`


export default class extends Component {
  state = {

  }

  componentDidMount() {
    // MARK: Check Token
  }

  _handleLoginCLick = () => {
    
  }

  render() {
    return (
      <Container>
        <Grid textAlign='center' style={{ height: '100vh', margin: 0 }} verticalAlign='middle'>
          <Grid.Column>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='username' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />
              <Router>
                <Link to="/home">
                  <Button color='violet' fluid size='large'>
                    Login
                  </Button>
                </Link>
              </Router>
            </Segment>
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