import React, { Component } from 'react'
import styled from 'styled-components'
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
import Swal from 'sweetalert2'
import {Color} from '../utils'
import { Input } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'
import appLogo from '../assets/zync.png'





const Container = styled.div`
  background: ${Color.background};
`

const CardContainer = styled.div`
    display: flex;
    top: -37px;
    justify-content: center;
`

const infomationData  = [
    {
        title:`1. ไปที่เว็บ "https://developers.facebook.com"แล้วกดปุ่ม สร้างแอพ`,
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
    },
    {}
]

export default class extends Component {
    state = {
        index:0,
        welcomeCss:'TransactionBoxIn',
        loading:false,
    }


    componentDidMount() {
        // MARK: Check Token
    }

    handleClickNext = () => {
        let nextState = (this.state.index+1)%infomationData.length
        this.setState({welcomeCss:'TransactionBoxOut'},() => {
            setTimeout(() => {this.setState({index:nextState,welcomeCss:'TransactionBoxIn'})},800)
        })
        console.log('clicked',nextState)
        console.log('length',infomationData.length)
    }

    handleSubmitToken = () => {
        console.log('axios')
    }

    handleInputVerify = (event) => {
        let {value} = event.target
        this.setState({inputVerify: value})
    }
    
    handleInputToken= (event) => {
        let {value} = event.target
        this.setState({inputToken: value})
    }

    handleSubmit = async () => {
        let data = await fetch('https://www.scbdreamteam.tk:3002/route/regisApi',{
            method:'POST',
            body:JSON.stringify({
                "token":this.state.inputToken,
                "verify":this.state.inputVerify,
                "userId":1
            })
        
        })
        if(data.status){
            Swal.fire(
                'Success !',
                'Token Registed have fun!',
                'success'
            ).then(() => this.props.history.push('/home'))
        }else{
            Swal.fire(
                'Fail !',
                'Please!',
                'error'
              )
        }
        console.log("Satate",data)
    }

    render() {
        let {index} = this.state
        let selectedInfomationDatat = infomationData[index]
        return (
            <Container style={{height:'100vh',paddingTop:'60px'}}>
                <Image src={appLogo} style={{paddingLeft: '20px',width:'78px'}} />
                <h2 style={{paddingLeft: '79px',position:'relative',top:'-75px',color: '#E7C200' }}>Getting Started</h2>
                <CardContainer>
                    <Welcomecard
                    image={selectedInfomationDatat.image}
                    title={selectedInfomationDatat.title}
                    handleClick={this.handleClickNext}
                    className={this.state.welcomeCss}
                    special={this.state.index == infomationData.length-1 ? true : false}
                    token={this.state.token}
                    verify={this.state.verify}
                    handleInputToken={this.handleInputToken}
                    handleInputVerify={this.handleInputVerify}
                    handleSubmit={this.handleSubmit}
                    /> 
                </CardContainer>
            </Container>
        )
    }

}
