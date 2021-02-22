import React from 'react'
import { Col, Card, Image } from 'react-bootstrap'
import star from '../assets/star.png'

const DeviceItem = ({device}) => {
    return (
        <Col md={3}>
            <Card 
                style={{width: 150, cursor: 'pointer'}} 
                border={'light'}
            >
                <Image width={150} height={150} src={device.img} />
                <div className="text-black-50 d-flex justify-content-between align-items-center mt-1">
                    <div>Same &#9734; text...</div>
                    <div className="d-flex mt-0">
                        <div>{device.rating}</div>
                        <Image className="mt-1 ml-1" width={15} height={15} src={star} />
                    </div>                    
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem
