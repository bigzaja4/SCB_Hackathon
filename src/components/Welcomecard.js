import React from 'react'
import { Card, Icon, Image, Input } from 'semantic-ui-react'
import '../views/Dashboard.css'

export default ({ handleClick, title, image, className, special, token,verify,
handleInputToken,handleInputVerify ,handleSubmit}) => {
    if (!special) {
        return (
            <Card style={{overflowY: 'hidden',width:'330px'}} className={className}>
                <Image style={{ width: '100%', overFlow: 'hidden' }} src={image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header style={{ paddingTop: '29px' }}>
                        {title}
                    </Card.Header>
                </Card.Content>
                <Card.Content textAlign={'right'} extra>
                    <button onClick={handleClick}> next </button>
                </Card.Content>
            </Card>
        )
    } else {
        return (
            <Card className="TransactionBox">
                <Card.Content>
                    <Card.Header>
                        <center> กรุณากรอก Token ที่รับมา</center>
                    </Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Input onChange={handleInputVerify} value={verify} placeholder='Verify...' />
                    <Input onChange={handleInputToken} value={token} placeholder='Token...' />
                    <button onClick={handleSubmit}> submit </button>
                </Card.Content>
            </Card>
        )
    }
}