import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useState } from 'react'
import NavbarMobileMenu from '../NavbarMobileMenu'

export default function Navbar() {
  const [navStatus, setNavStatus] = useState(false)

  const handleNavStatus = () => {
    setNavStatus(!navStatus)
    console.log(navStatus)
  }

  return (
    <>
      <div className='sticky top-0 w-full shadow-xl z-[100] bg-[#ecf0f3]'>
        <nav className='max-w-7xl grid grid-cols-nav-layout mx-auto py-5'>
          <h2 className='text-2xl xs:text-3xl'>
            <Link href='/'>Daniel Northcott</Link>
          </h2>

          <div></div>

          <ul className='hidden md:grid grid-cols-nav-layout-2  place-items-center child:mx-4'>
            <li>
              <Link href='/#about'>About</Link>
            </li>
            <li>
              <Link href='/#skills-and-tools'>Skills</Link>
            </li>
            <li>
              <Link href='/#my-work'>My Work</Link>
            </li>
            <li>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>

          {/* Mobile */}
          <FontAwesomeIcon
            onClick={handleNavStatus}
            icon={faBars}
            className='md:hidden w-7 mr-3'
          />

          {navStatus && <NavbarMobileMenu handleNavStatus={handleNavStatus} />}
        </nav>
      </div>
    </>
  )
}
