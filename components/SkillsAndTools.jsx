import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  PrismaLogo,
  ExpressLogo,
  TailwindLogo,
  PostGreSQLLogo,
} from '../public/Logos/logos.js'

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

          <div className='mx-auto mt-10 grid grid-cols-icons-layout py-10 px-2 text-sm gap-8 child:grid child:place-items-center pb-32'>
            <div>
              <FontAwesomeIcon icon={faHtml5} className='px-6' />
              HTML
            </div>
            <div>
              <FontAwesomeIcon icon={faCss3} className='px-6 py-2' />
              CSS
            </div>
            <div>
              <FontAwesomeIcon icon={faJsSquare} className='px-6' />
              JAVASCRIPT
            </div>
            <div>
              <FontAwesomeIcon icon={faReact} className='px-6' />
              REACT
            </div>
            <div>
              <FontAwesomeIcon icon={faNodeJs} className='px-6' />
              NODE.JS
            </div>
            <div>
              <TailwindLogo />
              TAILWIND
            </div>
            <div>
              <ExpressLogo />
              EXPRESS
            </div>
            <div>
              <PrismaLogo />
              PRISMA
            </div>
            <div className='z-10'>
              <PostGreSQLLogo />
              PRISMA
            </div>
          </div>
        </div>
      </section>
      <div className='divider2' id='my-work'></div>
    </>
  )
}
