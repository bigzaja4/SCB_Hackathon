import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default ({handleClick,title,image}) => (
    <Card>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
                <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
                {title}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <button onClick={handleClick}> next </button>
        </Card.Content>
    </Card>
)