import React from 'react'
import styled from 'styled-components'
import { Grid, Image, Card } from 'semantic-ui-react'
import { Container, bankNumberFormatter } from '../utils'
import scbLogo from '../assets/scb-logo.jpg'

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.43);
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1;
  padding 0 25px;
`

const ModalContainer = styled(Grid)`
  border-radius: ${Container.borderRadius};
`

const WrapCardDescription = styled(Grid.Column)`
  word-break: break-all;
`

export default props => {
  const {
    index = 0,
    data = [],
  } = props
  return (
    <Background>
      <ModalContainer textAlign='center' style={{ height: '100vh', paddingBottom: 200 }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450}}>
          <Card centered>
            <Card.Content>
              <Image floated='left' size='tiny' src={scbLogo} />
              <Card.Header textAlign="left">{(data[index] && data[index].sender.name) || 'Lorem Ipsum'}</Card.Header>
              <Card.Header textAlign="left">{bankNumberFormatter((data[index] && data[index].sender.account.value) || '1234567890', 'xxx-xxxyyy-y')}</Card.Header>
              <Card.Meta textAlign="left">
                {data[index] && data[index].transDate || '22 / 06 / 2019'}&nbsp;
                {data[index] && data[index].transTime || '10:06'} น.
              </Card.Meta>
              <Card.Description>
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