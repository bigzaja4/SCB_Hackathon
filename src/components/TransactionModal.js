import React from 'react'
import styled from 'styled-components'
import { Grid, Image, Card } from 'semantic-ui-react'
import { Container, bankNumberFormatter } from '../utils'
import scbLogo from '../assets/scb-logo.jpg'
import './tran.css'
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from 'react-icons/fa';

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.43);
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 4;
  padding 0 25px;
`

const ModalContainer = styled(Grid)`
  border-radius: ${Container.borderRadius};
  z-index: 10;
  position: relative;

`

const WrapCardDescription = styled(Grid.Column)`
  word-break: break-all;
`

export default class TransactionModal extends React.Component {

  state = {
    index: 0,
    data: this.props.data,
    CardClass: "CardSlideFx"
  } 

  componentDidMount(){
  }

  render(){
    let {data,index} = this.state
    return (
      <Background className="EIEI">
        <ModalContainer textAlign='center' style={{ height: '100vh', paddingBottom: 200 }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450}}>
          
            <Card centered id={this.state.CardClass}>

            <FaArrowAltCircleLeft 
            onClick={()=> { 
              if(this.state.index-1 > -1){
                this.setState({index: this.state.index-1,CardClass: "CardSlideDef"})
                setTimeout(()=>{this.setState({CardClass:"CardSlideFx"})},10)}} 
              }
            style={{position:'absolute',fontSize:'2em',top:"39%",left:'5%',color:"#FDEE98",zIndex:"6"}}/>




            <FaArrowAltCircleRight onClick={()=> { 
              if(this.state.index+1 < this.state.data.length){
                this.setState({index: this.state.index+1,CardClass: "CardSlideDef"});
                setTimeout(()=>{this.setState({CardClass:"CardSlideFx"})},10)} }
              }
            style={{position:'absolute',right:'0px',fontSize:'2em',top:"38%",right:'5%',color:"#FDEE98",zIndex:"6"}}/>



  
              <Card.Content>
              <p style={{float: "right",backgroundColor:"#ff6464",color:"white",width:"8%",borderRadius:"100%"}} onClick={()=> {this.props.closeModal()}}> X</p>
                <Image floated='left' size='tiny' src={scbLogo} />
                <Card.Header textAlign="left">{(data[index] && data[index].name) || 'Lorem Ipsum'}</Card.Header>
                <Card.Header textAlign="left">{bankNumberFormatter((data[index].value), 'xxx-xxxyyy-y')}</Card.Header>
                <Card.Meta textAlign="left">
                  {data[index] && data[index].transDate || '22 / 06 / 2019'}&nbsp;
                  {data[index] && data[index].transTime || '10:06'} น.
                </Card.Meta>
  
                   
  
                <Card.Description  >
                  
                  <Grid>
                    <Grid.Row>
                      
                      <Grid.Column width={6}>
                        <Card.Description><strong>Amount</strong></Card.Description>
                      </Grid.Column>
                      <Grid.Column width={3} />
                      <Grid.Column width={4}>
                        <Card.Description><strong>{Intl.NumberFormat('en-IN', {maximumSignificantDigits: 3}).format((data[index] && data[index].paidLocalAmount) || '5345.455')}</strong></Card.Description>
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <Card.Description><strong>฿</strong></Card.Description>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={6}>
                        <Card.Description><strong>Trans Ref.</strong></Card.Description>
                      </Grid.Column>
                      <Grid.Column width={3} />
                      <Grid.Column width={7}>
                        <WrapCardDescription className="description">{(data[index] && data[index].transRef) || '201906225f3GFy43Qeh1vHp'}</WrapCardDescription>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Card.Description>
                
                
              </Card.Content>
            </Card>
          </Grid.Column>
        </ModalContainer>
      </Background>
    )
  }
  
}