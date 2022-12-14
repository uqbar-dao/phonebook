import React, { useState } from 'react'
import Row from '../../components/spacing/Row'
import Link from './Link'
import logo from '../../assets/img/uqbar-orange.png'
import Text from '../../components/text/Text'
import './Navbar.scss'
import Col from '../spacing/Col'
import Marquee from 'react-fast-marquee'
import HomeMenu from '../phonebook/HomeMenu'

interface NavbarProps {
  onToggle: Function
  menuOpen: boolean
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen, onToggle }) => {

  return (  
    <Col className='navbar'>
      <Row style={{ width: '100%', justifyContent: 'space-between' }}>
        <Row className='logo-text'>
          <Link external title='Home' href='/' className='nav-link logo'>
            <Row>
              <img src={logo} alt='Uqbar Logo' />
            </Row>
          </Link>
          <Text large className='logo-title'>UQBAR</Text>
        </Row>

        <HomeMenu open={menuOpen} onToggle={onToggle} />

      </Row>
    </Col> 
  )
}

export default Navbar

