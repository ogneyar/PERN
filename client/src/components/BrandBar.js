import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { Row, Card } from 'react-bootstrap'

const BrandBar =  observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className='d-flex'>
            <Card
                style={{cursor: "pointer"}}
                border={undefined === device.selectedBrand.id ? 'danger' : 'light'}
                onClick={() => device.setSelectedBrand({})}
                key={0}
                className="p-3"
            >
                Все бренды
            </Card>
            {device.brands.map(brand =>
                <Card
                    style={{cursor: "pointer"}}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    onClick={() => device.setSelectedBrand(brand)}
                    key={brand.id}
                    className="p-3"
                >
                    {brand.name}
                </Card>    
            )}
        </Row>
    )
})

export default BrandBar
