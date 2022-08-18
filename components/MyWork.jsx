import Image from 'next/image'

export default function MyWork() {
  return (
    <section className='max-w-7xl mx-auto'>
      <h3>My Work</h3>
      <div className=''>
        {/* <Image src='/codified.png' layout='fill' width={500} height={500} /> */}
        <Image
          src='/codified.png'
          width='900px'
          height='700px'
          objectFit='cover'
        />
      </div>
    </section>
  )
}
