import React from 'react'
import NavBarBelt from './NavBarBelt/NavBarBelt'
import NavBarBanner from './NavBarBanner/NavBarBanner'

const NavBar = () => {
  return (
    <div className='NavBar'>
        <NavBarBelt />
        <NavBarBanner />
    </div>
  )
}

export default NavBar