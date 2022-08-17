import DevIcon from 'devicon-react-svg'
import { PrismaLogo, ExpressLogo, TailwindLogo } from '../public/Logos'

const devIconStyle = {
  fill: '#ecf0f3',
  width: '5rem',
}

const iconNames = [
  'html5',
  'css3',
  'javascript',
  'react',
  'nodejs',
  'git',
  'postgresql',
]

export default function SkillsAndTools() {
  return (
    <section className='bg-[#1f2937] h-[60vh]'>
      <div className='max-w-7xl mx-auto  text-white'>
        <h3 className=' text-2xl pt-5'>Skills And Tools</h3>
        <div className='grid grid-cols-icons-layout py-10 text-sm gap-5 child:grid child:place-items-center'>
          <p>
            Here's a list of the tools i learnt with the help of my bootcamp
          </p>
          {iconNames.map((iconName) => (
            <div>
              <DevIcon icon={iconName} style={devIconStyle} />
              {iconName.toUpperCase()}
            </div>
          ))}
          <div>
            <PrismaLogo />
            PRISMA
          </div>
          <div>
            <ExpressLogo />
            EXPRESS
          </div>
          <div>
            <TailwindLogo />
            TAILWIND
          </div>
        </div>
      </div>
    </section>
  )
}
