import Image from 'next/image'
import React from 'react'

const NextJsText = () => (
  <div>
    {/* <p className='p-5'>
      I wanted to get exposure to Next.js and thought this portfolio would be a
      great opportunity to do so. Notably I've made use of the lazy loading
      images, static site generation and file based routing which it offers and
      definitely plan to build more projects using Next.js.
    </p> */}
  </div>
)
const FramerMotionText = () => <div></div>
const RoughNotationText = () => (
  <div>
    {/* <p className='p-5'>
      Rough Notation for the highlighting of text. This to me was a nicer unique
      way to draw the user attention to key bits of information rather than just
      bolding or coloring these bits of information how i normally would. the
      fact its aniimated as well makes the website feel more dynamic to me.
    </p> */}
  </div>
)
const BlenderText = () => <div></div>
const ThreeJsText = () => <div></div>
const TailwindText = () => <div></div>

const KeyFeatureCard = ({
  imagePath,
  imageAlt,
  keyFeatureCardTitle,
  colSpan,
}) => {
  return (
    <div
      className={
        'shadow-2xl rounded-xl bg-white text-black' + (colSpan ? colSpan : '')
      }
    >
      <div className={'w-full h-32 rounded-t-lg relative overflow-hidden '}>
        <Image src={imagePath} alt={imageAlt} layout='fill' objectFit='cover' />
      </div>
      <h2 className='p-2 border-t border-gray-200'>{keyFeatureCardTitle}</h2>
      {imageAlt === 'Next.js logo' && <NextJsText />}
      {imageAlt === 'Framer Motion logo' && <FramerMotionText />}
      {imageAlt === 'Rough Notation logo' && <RoughNotationText />}
      {imageAlt === 'Blender monitor design' && <BlenderText />}
      {imageAlt === 'Three.js logo' && <ThreeJsText />}
      {imageAlt === 'Tailwind CSS logo' && <TailwindText />}
    </div>
  )
}
export default function portfolio() {
  return (
    <div className='bg-white'>
      <div className='divider3'></div>
      <div className='max-w-7xl mx-auto'>
        <h3 className='my-10 text-4xl'>Key Features</h3>
        <section className='grid grid-cols-key-features-layout gap-5 mx-10 mb-20'>
          <KeyFeatureCard
            imagePath={'/next.js-logo.png'}
            imageAlt={'Next.js logo'}
            keyFeatureCardTitle={'Next.js'}
          />

          <KeyFeatureCard
            imagePath={'/framer-motion-logo.png'}
            imageAlt={'Framer Motion logo'}
            keyFeatureCardTitle={'Framer Motion'}
          />

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
            imagePath={'/blender.png'}
            imageAlt={'Blender monitor design'}
            keyFeatureCardTitle={'Blender'}
            colSpan={'col-span-2'}
          />

          <KeyFeatureCard
            imagePath={'/tailwind-logo.png'}
            imageAlt={'Tailwind CSS logo'}
            keyFeatureCardTitle={'Tailwind'}
          />
          {/* <p>
          the coolest websites ive seen all use webGL in the form of three.js.
          React three fiber is version of three.js made for react and i wanted
          to gain exposure to this technology. i made my own 3D computer model
          in blender with the help of too many tutorials to count. I then had to
          find a way to put it in my website. 3 days later i fihured it out. i
          initially tried it with just a sphere with the help of{' '}
          <a href=''>this tutorial</a> i managed to refactor my code and achieve
          the functionality i was aiming for. next was to import the model i
          made. the heat of my laptop was the first indication it was quite
          resource intensive and when i tried to add extra canvas the website
          was so slow. subsequently i used <a href=''>GLTFJSX</a> using the
          inbuil draco compression to compress my blender model and finally i
          had the result i initiallly aimed for
        </p> */}
        </section>
      </div>
      <div className='divider4'></div>
    </div>
  )
}
