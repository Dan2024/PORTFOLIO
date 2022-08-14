export default function Navbar() {
  return (
    <>
      <nav className='max-w-7xl grid grid-cols-nav-layout mt-6 mx-auto'>
        <h2>Daniel Northcott</h2>
        <div></div>
        <ul className='grid grid-cols-nav-layout-2 place-items-center child:mx-4'>
          <li>About</li>
          <li>Skills & Tools</li>
          <li>My Work</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  )
}
