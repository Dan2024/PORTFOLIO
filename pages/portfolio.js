import Image from 'next/image'
import KeyFeatureCard from '/components/KeyFeatureCards.jsx'
import Link from 'next/link'

export default function Portfolio() {
  return (
    <div className='bg-white '>
      <div className='divider3'></div>
      <div className='max-w-7xl mx-auto'>
        <h2 className='my-10'>Case Study</h2>
        <span className='text-portfolio-blue ml-3 underline'>
          <Link href='/#my-work'>Back</Link>
        </span>
        <section className=' child:shadow-2xl child:rounded-xl child:my-10 child:mx-5'>
          <div className='md:grid grid-cols-hero-layout '>
            <div className='p-5 child:pb-10'>
              <h3>Production Level Stack Using Next.js and Tailwind</h3>
              <p>
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='text-[#528998] underline'
                  href='https://nextjs.org/'
                >
                  Next.js
                </a>{' '}
                offers lots of great features and is suited for building
                production level apps and I thought that this portfolio website
                would be a great opportunity to gain some experience with Next.
              </p>
              <p>
                Notably I made use of the lazy loading images and static site
                generation Next has to offer. This was mainly to improve the
                performance of my website, for example as I'm not making API
                calls and the information wont be changing consistently I opted
                to generate this site statically.
              </p>

              <p>
                The reasoning for{' '}
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='text-[#528998] underline'
                  href='https://tailwindcss.com/'
                >
                  Tailwind CSS
                </a>{' '}
                was to get even more familiar with a styling system used in
                industry. I'd also used tailwind on other projects and so I was
                able to style my website quite time efficiently.
              </p>
            </div>
          </div>

          <div className='lg:grid grid-cols-2-col-grid__expand-two'>
            <div className='p-5 child:pb-5 col-start-2'>
              <h3>3D Graphics With Three.js and blender</h3>
              <p>
                I noticed all the most impressive looking websites in my opinion
                were made using the{' '}
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='text-[#528998] underline'
                  href='https://threejs.org/'
                >
                  Three.js
                </a>{' '}
                library and because of this I was really eager to implement some
                3D web graphics of my own in my portfolio.
              </p>
              <p>
                I used{' '}
                <a
                  className='text-[#528998] underline'
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/pmndrs/react-three-fiber'
                >
                  React Three Fiber
                </a>{' '}
                (a react renderer for Three.js) to implement Three.js in react.
                I started out just trying to get a simple box to render on the
                screen and follow my mouse. Eventually after I had managed this
                I took to blender to create the 3D monitors displaying my
                projects. I then later managed to get my custom monitor to
                follow my mouse, the only problem was that it was extremely
                resource intensive...
              </p>
              <p>
                This led me to disover{' '}
                <a
                  className='text-[#528998] underline'
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/pmndrs/gltfjsx'
                >
                  GLTFJSX
                </a>{' '}
                (A tool that can turn GLTF files into JSX components suibtible
                for react-three-fiber) this allowed me to compress my monitor
                files substantially and optimise it for the web which made my
                website fast again (and stopped my laptop from turning to lava).
              </p>
            </div>
            <div
              className={
                'mx-auto w-full aspect-[100/74] sm:h-[360px] rounded-t-lg relative overflow-hidden rounded-l-xl place-self-center row-start-1'
              }
            >
              <Image
                src={'/portfolio-images/blender-monitor-img.png'}
                alt={'blender monitor image'}
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>

          <div className='md:grid grid-cols-hero-layout'>
            <div className='p-5 child:pb-5'>
              <h3>Animations</h3>
              <p>
                Again I always found that the most visually apealling websites
                had a few well placed animations and so animations were
                definitely something I wanted to incoorporate into my website.
              </p>
              <p>
                After a bit of research I found a small Javascript library
                called{' '}
                <a
                  className='text-[#528998] underline'
                  href='https://roughnotation.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Rough Notation
                </a>{' '}
                which allowed, in my opinion, for a more unique way to draw the
                users attention to key bits of text. This Coupled with the{' '}
                <a
                  className='text-[#528998] underline'
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/thebuilder/react-intersection-observer'
                >
                  React Intersection Observer
                </a>{' '}
                allowed me to trigger these subtle animations whenever a certain
                element was visible to the user.
              </p>
              {/* <p>
                I also used{' '}
                <a
                  className='text-[#528998] underline'
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.framer.com/motion/'
                >
                  Framer Motion
                </a>{' '}
                to animate the page transitions when the user is taken to a new
                page.
              </p> */}
            </div>
          </div>
        </section>

        <h3 className='my-10 text-4xl'>Key Technologies Used</h3>
        <section className='grid grid-cols-key-features-layout gap-10 mx-10 mb-20'>
          <KeyFeatureCard
            imagePath={'/next.js-logo.png'}
            imageAlt={'Next.js logo'}
            keyFeatureCardTitle={'Next.js'}
          />

          {/* <KeyFeatureCard
            imagePath={'/framer-motion-logo.png'}
            imageAlt={'Framer Motion logo'}
            keyFeatureCardTitle={'Framer Motion'}
          /> */}

          <KeyFeatureCard
            imagePath={'/rough-notation-logo.png'}
            imageAlt={'Rough Notation logo'}
            keyFeatureCardTitle={'Rough Notation'}
            keyFeatureText={''}
          />

          <KeyFeatureCard
            imagePath={'/threejs-logo.png'}
            imageAlt={'Three.js logo'}
            keyFeatureCardTitle={'Three.js'}
          />

          <KeyFeatureCard
            imagePath={'/blender-logo.png'}
            imageAlt={'Blender logo design'}
            keyFeatureCardTitle={'Blender'}
            colSpan={'col-span-2'}
          />

          <KeyFeatureCard
            imagePath={'/tailwind-logo.png'}
            imageAlt={'Tailwind CSS logo'}
            keyFeatureCardTitle={'Tailwind'}
          />
        </section>
      </div>
      <div className='divider4'></div>
    </div>
  )
}
