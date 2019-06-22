import React from 'react'
import { Card, Icon, Image,Input } from 'semantic-ui-react'
import '../views/Dashboard.css'

export default ({handleClick,title,image,className,handleSendEvent,special}) => {
    if(!special){
        return (
            <Card className={className}>
                <Image style={{width: '300px',height: '150px',overFlow: 'hidden'}} src={image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header style={{paddingTop:'69px'}}>
                        {title}
                    </Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                    <button onClick={handleClick}> next </button>
                </Card.Content>
            </Card>
        )
    }else{
        return (
            <Card className="TransactionBox">
            <Card.Content>
                <Card.Header>
                   <center> กรุณากรอก Token ที่รับมา</center>
                </Card.Header>
                </Card.Content>
                <Card.Content extra>
                <Input placeholder='Token...' />
                <button onClick={handleSendEvent}> submit </button>
            </Card.Content>
        </Card>
        )
    }
}