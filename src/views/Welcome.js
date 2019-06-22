import React, { Component } from 'react'
import styled from 'styled-components'
import { Color } from '../utils'
import { Card, Icon, Image } from 'semantic-ui-react'


const Container = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 52.6%, ${() => Color.secondary} 100%), ${() => Color.primary};
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
            <Container>
                <div className="Dashboard">
                    <div className="DHeader">
                        &nbsp;&nbsp;&nbsp;&nbsp;Dashboard
                    </div>
                </div>

                <Card>
                    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Matthew</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>
                            Matthew is a musician living in Nashville.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            22 Friends
                        </a>
                    </Card.Content>
                </Card>

            </Container>
        )
    }

}
