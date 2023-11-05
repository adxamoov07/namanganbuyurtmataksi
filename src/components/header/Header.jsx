import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import HeaderTop from '../header/headerTop/HeaderTop'

function Header() {
  return (
    <div>
      <HeaderTop />
      <div className='header'>
          <Link className='namangandan' to={'/namangandan'}>NAMANGANDAN TOSHKENTGA</Link>
          <Link className='toshkentdan' to={'/toshkentdan'}>TOSHKENTDAN NAMANGANGA</Link>
      </div>
    </div>
  )
}

export default Header