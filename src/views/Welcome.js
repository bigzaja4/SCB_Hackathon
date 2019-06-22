import React, { Component } from 'react'
import styled from 'styled-components'
import { Color } from '../utils'
import Welcomecard from '../components/Welcomecard'


const Container = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 52.6%, ${() => Color.secondary} 100%), ${() => Color.primary};
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 66px;
`

export default class extends Component {
    state = {

    }



    componentDidMount() {
        // MARK: Check Token
        console.log("****** welcome developmetn")
    }

    render() {
        return (
            <Container style={{height:'100vh'}}>
                <CardContainer>
                   <Welcomecard />
                </CardContainer>
            </Container>
        )
    }

}
