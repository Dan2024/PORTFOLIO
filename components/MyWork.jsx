import Image from 'next/image'

export default function MyWork() {
  return (
    <section className='max-w-7xl mx-auto'>
      <h3>My Work</h3>
      <div className=''>
        <div className='w-1/2 h-96 relative overflow-hidden rounded-2xl'>
          <Image
            src='/codified.png'
            layout='fill'
            objectFit='cover'
            objectPosition='top center'
            quality='1'
          />
          <div>
            <p>
              CODIFEYED is a website I created focusing on Front-End design and
              computer science topics i was only able to very briefly cover in
              my bootcamp.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
