import Navbar from '../components/Navbar'
import DevIcon from 'devicon-react-svg'

const devIconStyle = {
  fill: '#264de4',
  width: '5rem',
}

const iconNames = ['css3', 'javascript', 'react']

export default function Codifeyed() {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto'>
        <h2 className='uppercase'>what is it?</h2>
        <p>
          A Front-End website that visualizes computer science topics, such as
          sorting algorithms and reccursion.
        </p>
        <h2 className='uppercase'>technologies used:</h2>
        {iconNames.map((iconName, idx) => (
          <div key={idx}>
            <DevIcon icon={iconName} style={devIconStyle} />
            {iconName.toUpperCase()}
          </div>
        ))}
        <img
          src='https://p5js.org/assets/img/p5js.svg'
          alt='p5.js'
          className='h-8'
        />
        <h2 className='uppercase'>why did i make it?</h2>
      </div>
    </>
  )
}
