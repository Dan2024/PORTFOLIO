import KeyFeatureCard from '/components/KeyFeatureCards.jsx'

export default function portfolio() {
  return (
    <div className='bg-white '>
      <div className='divider3'></div>
      <div className='max-w-7xl mx-auto'>
        <h3 className='my-10 text-4xl'>Key Technologies Used</h3>
        <section className='grid grid-cols-key-features-layout gap-10 mx-10 mb-20'>
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
        </section>
      </div>
      <div className='divider4'></div>
    </div>
  )
}
