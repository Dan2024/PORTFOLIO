import Image from 'next/image'
import KeyFeatureCard from '/components/KeyFeatureCards.jsx'

export default function Codifeyed() {
  return (
    <div className='bg-white '>
      <div className='divider3'></div>
      <div className='max-w-7xl mx-auto'>
        <h3 className='my-10 text-4xl'>Case Study</h3>
        <section className=' child:shadow-2xl child:rounded-xl  child:my-10'>
          <div className='grid grid-cols-hero-layout '>
            <div className='p-5 child:pb-10'>
              <h3>Sorting Algorithms</h3>
              <p>
                I used{' '}
                <a
                  className='text-[#528998] underline'
                  href='https://www.youtube.com/watch?v=eqo2LxRADhU'
                >
                  This Coding Train Video
                </a>{' '}
                as a starting point for an idea of how I could animate my
                sorting algorithms. I learnt from him that I could use
                asynchronous sleep functions (essentially ~5ms pauses) before
                each change in the array to animate the algorithm.
              </p>
              <p>
                I initially tried this is in React setting the unsorted array in
                state however the animation was extremely clunky. Researching
                why I diagnosed this was likely due to the fact react 'batches'
                multiple state updates as one state update. Ultimately I ended
                up using P5.js for the animations as it has a draw function that
                you can run on a loop meaning each stage of the sorting algorthm
                could be seen, thus making the animation much smoother.
              </p>

              <p>
                The hardest algorithm to implement was Merge Sort as the way I
                had set up my logic, I realised I had to perform an In-Place
                Merge Sort (one where there is no extra memory for the merge
                operation, i.e no copies of the array are made during the
                merge). Although challenging, I'm glad I attempted this one as I
                think it looks the best!
              </p>
            </div>
            <div
              className={
                'aspect-[100/74] h-[350px] rounded-t-lg relative overflow-hidden rounded-r-xl place-self-center'
              }
            >
              <Image
                src={'/codifeyed-gifs/algos-visualized.gif'}
                alt={'Sorting algorithm demonstration gif'}
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
          <div className='grid grid-cols-2-col-grid__expand-two'>
            <div
              className={
                'aspect-[100/74] h-[350px] rounded-t-lg relative overflow-hidden rounded-l-xl place-self-center'
              }
            >
              <Image
                src={'/codifeyed-gifs/fractals.gif'}
                alt={'Fractal forest demonstration gif'}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className='p-5 child:pb-5'>
              <h3>Recursive Functions</h3>

              <p>
                I explored the Fractal Trees to learn about recursive functions
                (... and because i thought they looked really cool). Using this{' '}
                <a
                  className='text-[#528998] underline'
                  href='https://www.youtube.com/watch?v=E1B4UoSQMFw'
                >
                  Video
                </a>{' '}
                I learnt about Lindenmayer-System fractal trees. These
                fascinated me so to build on from the tutorial I watched, I
                researched until I found{' '}
                <a
                  className='text-[#528998] underline'
                  href='httppaulbourke.net/fractals/lsys/'
                >
                  this resource
                </a>
                . This resource then allowed me to implement a number of
                different interesing looking trees as it outlined the
                mathematical rules needed to create them which i was able to
                codify.
              </p>
            </div>
          </div>
          <div className='grid grid-cols-hero-layout'>
            <div className='p-5 child:pb-5'>
              <h3>Codifying Mathematical Formulas</h3>
              <p>
                The Pendulum again was inspired by a{' '}
                <a
                  className='text-[#528998] underline'
                  href='https://www.youtube.com/watch?v=uWzPe_S-RVE'
                >
                  Coding Train Video
                </a>
                . Here I learnt how more complex mathematical formulas could
                codified and I extended the project by adding sliders at that
                allowed you to manipulate values in the equation. This was to
                allow the user to see the effects of changing a value like
                gravity for example in real time.
              </p>
            </div>
            <div
              className={
                'aspect-[100/74] h-[350px] rounded-t-lg relative overflow-hidden rounded-r-xl place-self-center'
              }
            >
              <Image
                src={'/codifeyed-gifs/pendulum.gif'}
                alt={'Pendulum demonstration gif'}
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
        </section>
        <h3 className='mt-28 mb-10 text-4xl '>Key Technologies Used</h3>
        <section className='grid grid-cols-key-features-layout gap-5 mx-10 mb-20'>
          <KeyFeatureCard
            imagePath={'/p5js-logo.png'}
            imageAlt={'P5.js logo'}
            keyFeatureCardTitle={'P5.js'}
          />

          <KeyFeatureCard
            imagePath={'/react-logo.png'}
            imageAlt={'Reactlogo'}
            keyFeatureCardTitle={'React'}
          />

          <KeyFeatureCard
            imagePath={'/js-logo.png'}
            imageAlt={'Javascript logo'}
            keyFeatureCardTitle={'JavaScript'}
          />
        </section>
      </div>
      <div className='divider4'></div>
    </div>
    // <>
    //   <div className='max-w-7xl mx-auto'>
    //     <h2>What Is It?</h2>
    //     <p>
    //       A Front-End website that visualizes computer science topics, such as
    //       sorting algorithms and reccursion.
    //     </p>
    //     <h2>Why Did I Make It?</h2>
    //     <p>
    //       I had to do a final project at the end of my bootcamp and i saw this
    //       as an oportunity to learn some of the computer science topics that
    //       were only briefly covered there. Through this project I gained a much
    //       better understanding of Big O Notation and why some algorithms are
    //       generally more efficient, but each have their own pros and cons
    //       depending on the situation. I also became a lot more confident with
    //       reccursive functions and they're no longer as intimidating to me as
    //       they once were. I'm continuing to learn about different data
    //       structures and algorithms in my own time with the help of Udemy and
    //       Leetcode so that i can become a more complete developer for the next
    //       company I work for. I used <a href=''>The Coding Train's Channel</a>{' '}
    //       as a large source of inspiration and learning for each section. Once I
    //       felt I had learnt enough I extended his projects as much as I could in
    //       the 2 weeks we had to complete our final project to really make them
    //       my own.
    //     </p>
    //   </div>
    // </>
  )
}