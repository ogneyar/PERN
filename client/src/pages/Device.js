import React from 'react'
import { Card, Col, Container, Image, Row, Button } from 'react-bootstrap'
import star from '../assets/star.png'

const Device = () => {
    const device = {id: 1, name: "Nokia 3310", price: 2000, rating: 5, img: "https://lastprint.ru/image/constructor_avatar_cache/product_49948_202_0_0.jpg"}
    const description = [
        {id: 1, title: 'Оперативная память', description: '5Гб'},
        {id: 2, title: 'Камера', description: '12 мп'},
        {id: 3, title: 'Процессор', description: 'Pentium 4'},
        {id: 4, title: 'Кол-во ядер', description: '4'},
        {id: 5, title: 'Аккумулятор', description: '4000'}
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />                
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div 
                            className="d-flex align-items-center justify-content-center"
                            style={{
                                background: `url(${star}) no-repeat center center`, 
                                width: 240,
                                height: 240,
                                backgroundSize: 'cover',
                                fontSize: 64,
                                color: 'green'
                            }}
                        >
                            {device.rating}
                        </div>                        
                    </Row>
                </Col>
                <Col md={4}>
                    <Card 
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От {device.price} руб.</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row 
                        key={info.id}
                        style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
                    >
                        {info.title}: {info.description}
                    </Row>    
                )}
            </Row>
            <div className="App">{device.name}</div>
        </Container>
    )
}

export default Device
