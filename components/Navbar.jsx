export default function Navbar() {
  return (
    <>
      <nav className='max-w-7xl grid grid-cols-nav-layout mt-6 mx-auto'>
        <h2>Daniel Northcott</h2>
        <div></div>
        <ul className='grid grid-cols-4 place-items-center child:w-32'>
          <li>About</li>
          <li>Skills</li>
          <li>My Work</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  )
}
