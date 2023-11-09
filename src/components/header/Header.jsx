import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import HeaderTop from '../header/headerTop/HeaderTop'

function Header() {
  return (
    <div>
      <HeaderTop />
      <div className='header'>
        <div className="namangandan">
          <Link className='namangandan_link' to={'/namangandan'}>NAMANGANDAN TOSHKENTGA</Link>
        </div>
        <div className="toshkentdan">
          <Link className='toshkentdan_link' to={'/toshkentdan'}>TOSHKENTDAN NAMANGANGA</Link>
        </div>
      </div>
    </div>
  )
}

export default Header