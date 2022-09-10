import Image from 'next/image'
import React from 'react'

export default function portfolio() {
  const KeyFeatureCard = ({
    imagePath,
    imageAlt,
    keyFeatureCardTitle,
    keyFeatureText,
    colSpan,
  }) => {
    return (
      <div className={'shadow-2xl rounded-xl ' + (colSpan ? colSpan : '')}>
        <div
          className={
            'w-full h-24 rounded-t-lg relative overflow-hidden ' +
            (colSpan ? 'h-32' : '')
          }
        >
          <Image
            src={imagePath}
            alt={imageAlt}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <h2 className='p-2'>{keyFeatureCardTitle}</h2>
        <p className='px-5 pb-5'>{keyFeatureText}</p>
      </div>
    )
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <h3 className='my-10 text-4xl'>Key Features</h3>
      <section className='grid grid-cols-key-features-layout gap-5 mx-10'>
        <KeyFeatureCard
          imagePath={'/next.js-logo.png'}
          imageAlt={'Next.js logo'}
          keyFeatureCardTitle={'Next.js'}
          keyFeatureText={
            'Next.js for the lazy loading images, and static site generation which makes sense for a portfolio website with and useful tech library to know on top of react.'
          }
          colSpan={false}
        />
        <KeyFeatureCard
          imagePath={'/framer-motion-logo.png'}
          imageAlt={'Framer Motion logo'}
          keyFeatureCardTitle={'Framer Motion'}
          keyFeatureText={'Framer motion for slick page transitions'}
          colSpan={false}
        />
        <KeyFeatureCard
          imagePath={'/rough-notation-logo.png'}
          imageAlt={'Rough Notation logo'}
          keyFeatureCardTitle={'Rough Notation'}
          keyFeatureText={
            'Rough Notation for the highlighting of text. This to me was a nicer unique way to draw the user attention to key bits of information rather than just bolding or coloring these bits of information how i normally would. the fact its aniimated as well makes the website feel more dynamic to me.'
          }
          colSpan={false}
        />
        <KeyFeatureCard
          imagePath={'/tailwind-logo.png'}
          imageAlt={'Tailwind CSS logo'}
          keyFeatureCardTitle={'Tailwind'}
          keyFeatureText={'tailwind for quick styling'}
          colSpan={false}
        />
        <KeyFeatureCard
          imagePath={'/blender.png'}
          imageAlt={'Tailwind CSS logo'}
          keyFeatureCardTitle={'Blender'}
          keyFeatureText={'tailwind for quick styling'}
          colSpan={'col-span-2'}
        />
        <KeyFeatureCard
          imagePath={'/threejs-logo.png'}
          imageAlt={'Three.js logo'}
          keyFeatureCardTitle={'Three.js'}
          keyFeatureText={
            'The coolest websites ive seen all use webGL in the form of three.js.  React three fiber is version of three.js made for react and i wanted to gain exposure to this technology. i made my own 3D computer model in blender with the help of too many tutorials to count. I then had to find a way to put it in my website. 3 days later i fihured it out. i initially tried it with just a sphere with the help of'
          }
          colSpan={false}
        />

        <p>
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
        </p>
      </section>
    </div>
  )
}
