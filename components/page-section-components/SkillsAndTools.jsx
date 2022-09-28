import {
  HTMLLogo,
  CSSLogo,
  TailwindLogo,
  JSLogo,
  ReactLogo,
  NodeLogo,
  ExpressLogo,
  PrismaLogo,
  PostgreSQLLogo,
  NextLogo,
  TSLogo,
} from '../../public/logos/Logos.js'

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

          <div className='mx-auto mt-10 grid grid-cols-icons-layout py-10 px-2 text-sm gap-8 child:grid child:place-items-center pb-32 text-xs'>
            <div>
              <HTMLLogo />
              <span className='mt-5'>HTML</span>
            </div>

            <div>
              <CSSLogo />
              <span className='mt-5'>CSS</span>
            </div>

            <div>
              <TailwindLogo />
              <span className='mt-5'>TAILWIND</span>
            </div>

            <div>
              <JSLogo />
              <span className='mt-5'>JAVASCRIPT</span>
            </div>

            {/* <div>
              <TSLogo />
              <span className='mt-5'>TYPESCRIPT</span>
            </div> */}

            <div>
              <ReactLogo />
              <span className='mt-5'>REACT.JS</span>
            </div>

            <div>
              <NextLogo />
              <span className='mt-5'> NEXT.JS</span>
            </div>

            <div>
              <ExpressLogo />
              <span className='mt-5'>EXPRESS.JS</span>
            </div>

            <div>
              <NodeLogo />
              <span className='mt-5'>NODE.JS</span>
            </div>

            <div>
              <PrismaLogo />
              <span className='mt-5'>PRISMA</span>
            </div>

            <div>
              <PostgreSQLLogo />
              <span className='mt-5'>POSTGRESQL</span>
            </div>
          </div>
        </div>
      </section>
      <div className='divider2' id='my-work'></div>
    </>
  )
}
