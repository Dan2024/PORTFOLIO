import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useState } from 'react'

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

          <FontAwesomeIcon
            onClick={handleNavStatus}
            icon={faBars}
            className='md:hidden w-7 mr-3'
          />

          {navStatus && (
            <div className='h-screen w-[80vw] bg-white top-0 fixed md:hidden'>
              <h2 className='p-4'>
                <Link href='/'>DN</Link>
              </h2>

              <ul className='child mx-5 child:mt-6'>
                <li onClick={handleNavStatus}>
                  <Link href='/#about'>About</Link>
                </li>
                <li onClick={handleNavStatus}>
                  <Link href='/#skills-and-tools'>Skills</Link>
                </li>
                <li onClick={handleNavStatus}>
                  <Link href='/#my-work'>My Work</Link>
                </li>
                <li onClick={handleNavStatus}>
                  <Link href='/#contact'>Contact</Link>
                </li>
              </ul>
            </div>
          )}

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
        </nav>
      </div>
    </>
  )
}
