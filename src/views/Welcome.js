import React, { Component } from 'react'
import styled from 'styled-components'
import { Color } from '../utils'
import Welcomecard from '../components/Welcomecard'
import ReactFullpage from '@fullpage/react-fullpage'


const Container = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 52.6%, ${() => Color.secondary} 100%), ${() => Color.primary};
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
                <ReactFullpage
                    render={({ state, fullpageApi }) => {
                    return (
                       <center>
                            <ReactFullpage.Wrapper
                        style={{
                            textAlign:'center',
                            paddingLeft:'66px'
                        }}>
                        <div className="section">
                            <p>Section 1 (welcome to fullpage.js)</p>
                            <button onClick={() => fullpageApi.moveSectionDown()}>
                            Click me to move down
                            </button>
                        </div>
                        <div className="section">
                            <p>Section 2</p>
                        </div>
                        <CardContainer className="section" >
                            <Welcomecard handleClick={() => fullpageApi.moveSectionDown()} />
                        </CardContainer>
                        <div className="section">
                            <p>Section 4</p>
                        </div>
                        </ReactFullpage.Wrapper>
                       </center>
                    );
                    }}
                />                </CardContainer>
            </Container>
        )
    }

}
