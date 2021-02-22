import React, { useContext } from 'react'
import { Context } from '..'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark" className="NavBar">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant={'outline-light'}>Админ панель</Button>
                        <Button className="ml-2" onClick={() => user.setIsAuth(false)} variant={'outline-light'}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">                    
                        <Button onClick={() => user.setIsAuth(true)} variant={'outline-light'}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar
