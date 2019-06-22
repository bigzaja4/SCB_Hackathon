import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Form, Grid, Message } from 'semantic-ui-react'
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
    this.props.history.push('/home')
  }

  render() {
    return (
      <Container>
        <Grid textAlign='center' style={{ height: '100vh', margin: 0 }} verticalAlign='middle'>
          <Grid.Column>
          <Form size='large'>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='username' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
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