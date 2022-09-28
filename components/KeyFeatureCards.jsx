import Image from 'next/image'

export default function KeyFeatureCard({
  imagePath,
  imageAlt,
  keyFeatureCardTitle,
  colSpan,
}) {
  return (
    <div
      className={
        'shadow-2xl rounded-xl bg-white text-black' + (colSpan ? colSpan : '')
      }
    >
      <div className={'w-full h-32 rounded-t-lg relative overflow-hidden '}>
        <Image
          src={'/logos' + imagePath}
          alt={imageAlt}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <h2 className='p-2 border-t border-gray-200'>{keyFeatureCardTitle}</h2>
    </div>
  )
}
