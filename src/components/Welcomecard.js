import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import '../views/Dashboard.css'

export default ({handleClick,title,image,className}) => (
    <Card className={className}>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
            <Card.Description>
                {title}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <button onClick={handleClick}> next </button>
        </Card.Content>
    </Card>
)