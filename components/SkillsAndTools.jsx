// import DevIcon from 'devicon-react-svg'
import { PrismaLogo, ExpressLogo, TailwindLogo } from '../public/Logos/logos.js'

const devIconStyle = {
  fill: '#ecf0f3',
  width: '5rem',
}

const iconNames = [
  'git',
  'html5',
  'css3',
  'javascript',
  'nodejs',
  // 'react',
  'postgresql',
]

export default function SkillsAndTools() {
  return (
    <>
      <div className='divider1' id='skills-and-tools'></div>
      <section className='bg-rich-black'>
        <div className='max-w-7xl mx-auto  text-white'>
          <h2 className='pt-10 pb-10'>Skills And Tools</h2>
          <p>
            Here's a list of the skills and tools i've learnt to help bring
            projects to life. Using targeted exercises through my bootcamp (and
            a lot of googling), ive managed to pick up these technologies quite
            quickly and I'm really enjoying building on these skills and
            learning new technologies as i develop - currently I'm learning{' '}
            <span className='font-bold'>Next.js</span> and{' '}
            <span className='font-bold'>Typescript.</span>
          </p>

          <div className='mx-auto mt-10 grid grid-cols-icons-layout py-10 text-sm gap-8 child:grid child:place-items-center pb-32'>
            {/* {iconNames.map((iconName, idx) => (
              <div key={idx}>
                <DevIcon icon={iconName} style={devIconStyle} />
                {iconName.toUpperCase()}
              </div>
            ))} */}
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
      <div className='divider2' id='my-work'></div>
    </>
  )
}
