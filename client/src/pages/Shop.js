import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '..'
import { useEffect } from 'react'
import {fetchBrands, fetchTypes, fetchDevices} from '../http/deviceAPI'


const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevices(data.rows))
    },[])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>                    
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    )
})

export default Shop
