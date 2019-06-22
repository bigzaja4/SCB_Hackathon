import React, { Component } from 'react'
import styled from 'styled-components'
import { Color } from '../utils'
import Welcomecard from '../components/Welcomecard'
import ReactFullpage from '@fullpage/react-fullpage'
import des1 from '../assets/des1.png'
import des2 from '../assets/des2.png'
import des3 from '../assets/des3.png'
import des4 from '../assets/des4.png'
import des5 from '../assets/des5.png'
import des6 from '../assets/des6.png'
import des7 from '../assets/des7.png'
import des8 from '../assets/des8.png'
import './Dashboard.css'


const Container = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 52.6%, ${() => Color.secondary} 100%), ${() => Color.primary};
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const infomationData  = [
    {
        title:'1. ไปที่เว็บ https://developers.facebook.com/ แล้วกดปุ่ม สร้างแอพ',
        image:des1
    },
    {
        title: '2. กรอกรายละเอียดแอพของเรา',
        image:des3
    },
    {
        title: '3. คลิกเพิ่มสินค้า',
        image:des4
    },
    {
        title: '4. เพิ่ม Messenger',
        image:des2
    },
    {
        title: '5. เลือกเพจที่จะมาต่ากับแอพ ',
        image:des6
    },
    {
        title: '6. คัดลอก access token',
        image:des7
    }
]

export default class extends Component {
    state = {
        index:0,
        welcomeCss:'TransactionBoxIn'
    }



    componentDidMount() {
        // MARK: Check Token
        console.log("****** welcome developmetn")
    }

    handleClickNext = () => {
        let nextState = (this.state.index+1)%infomationData.length
        this.setState({welcomeCss:'TransactionBoxOut'},() => {
            setTimeout(() => {this.setState({index:nextState,welcomeCss:'TransactionBoxIn'})},800)
        })
        console.log('clicked',nextState)
    }



    render() {
        let {index} = this.state
        let selectedInfomationDatat = infomationData[index]
        return (
            <Container style={{height:'100vh',paddingTop:'200px'}}>
                <CardContainer>
                    <Welcomecard
                    image={selectedInfomationDatat.image}
                    title={selectedInfomationDatat.title}
                    handleClick={this.handleClickNext}
                    className={this.state.welcomeCss}
                    /> 
                </CardContainer>
            </Container>
        )
    }

}
