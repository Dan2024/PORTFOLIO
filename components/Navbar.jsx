export default function Navbar() {
  return (
    <>
      <div className='sticky top-0 w-full shadow-xl z-[100] bg-[#ecf0f3]'>
        <nav className='max-w-7xl grid grid-cols-nav-layout mx-auto py-5'>
          <h2>
            <a href='/#home'>Daniel Northcott</a>
          </h2>
          <div></div>
          <ul className='hidden md:grid grid-cols-nav-layout-2  place-items-center child:mx-4'>
            <li>
              <a href='/#about'>About</a>
            </li>
            <li>
              <a href='/#skills-and-tools'>Skills</a>
            </li>
            <li>
              <a href='/#my-work'>My Work</a>
            </li>
            <li>
              <a href='/#contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
