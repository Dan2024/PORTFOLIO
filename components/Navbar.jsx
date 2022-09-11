import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className='sticky top-0 w-full shadow-xl z-[100] bg-[#ecf0f3]'>
        <nav className='max-w-7xl grid grid-cols-nav-layout mx-auto py-5'>
          <h2>
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
        </nav>
      </div>
    </>
  )
}
