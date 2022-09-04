export default function Navbar() {
  return (
    <>
      <div className='sticky top-0 w-full shadow-xl z-[100] bg-[#ecf0f3]'>
        <nav className='max-w-7xl grid grid-cols-nav-layout mx-auto py-5'>
          <h2>Daniel Northcott</h2>
          <div></div>
          <ul className='hidden md:grid grid-cols-nav-layout-2  place-items-center child:mx-4'>
            <li>About</li>
            <li>Skills & Tools</li>
            <li>My Work</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </>
  )
}
