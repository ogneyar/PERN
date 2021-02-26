import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDevice from '../components/modals/CreateDevice'
import CreateType from '../components/modals/CreateType'


const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [brandVisible, setBrandVisible] =  useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"                
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить устройство
            </Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <h1 className="App" style={{border:'1px solid', padding: '0', margin:'10px auto', width:'100px', height:'100px', borderRadius:'100%'}}>true</h1>
        </Container>
    )
}

export default Admin
