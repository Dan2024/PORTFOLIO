import Link from 'next/link'

export default function NavbarMobileMenu({ handleNavStatus }) {
  return (
    <header className='h-screen w-[80vw] bg-white top-0 fixed md:hidden'>
      <h2 className='p-4'>
        <Link href='/'>DN</Link>
      </h2>

      <nav>
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
      </nav>
    </header>
  )
}
