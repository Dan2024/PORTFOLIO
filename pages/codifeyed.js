export default function Codifeyed() {
  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <h2>What Is It?</h2>
        <p>
          A Front-End website that visualizes computer science topics, such as
          sorting algorithms and reccursion.
        </p>
        <h2>Why Did I Make It?</h2>
        <p>
          I had to do a final project at the end of my bootcamp and i saw this
          as an oportunity to learn some of the computer science topics that
          were only briefly covered there. Through this project I gained a much
          better understanding of Big O Notation and why some algorithms are
          generally more efficient, but each have their own pros and cons
          depending on the situation. I also became a lot more confident with
          reccursive functions and they're no longer as intimidating to me as
          they once were. I'm continuing to learn about different data
          structures and algorithms in my own time with the help of Udemy and
          Leetcode so that i can become a more complete developer for the next
          company I work for. I used <a href=''>The Coding Train's Channel</a>{' '}
          as a large source of inspiration and learning for each section. Once I
          felt I had learnt enough I extended his projects as much as I could in
          the 2 weeks we had to complete our final project to really make them
          my own.
        </p>
        <h2>Key Features</h2>
        <p>
          I used <a href=''>This Coding Train Video</a> as a starting point for
          an idea of how I could animate my sorting algorithms. I learnt from
          him that I could use asynchronous sleep functions (essentially ~5ms
          pauses) before each change in the array to animate the algorithm.
        </p>
        <p>
          I initially tried this is in React setting the unsorted array in state
          however the animation was extremely clunky. Researching why I
          diagnosed this was likely due to the fact react 'batches' multiple
          state updates as one state update. Ultimately I ended up using P5.js
          for the animations as it has a draw function that you can run on a
          loop meaning each stage of the sorting algorthm could be seen, thus
          making the animation much smoother.
        </p>
        <p>
          The hardest algorithm to implement was Merge Sort as the way I had set
          up my logic, I realised I had to perform an In-Place Merge Sort (one
          where there is no extra memory for the merge operation, i.e no copies
          of the array are made during the merge). I'm glad I attempted this one
          as I think it looks the best!
        </p>
        <p>
          I explored the Fractal Trees to learn about recursive functions (...
          and because i thought they looked really cool). Using this{' '}
          <a href=''>Video</a> I learnt about Lindenmayer-System fractal trees.
          These fascinated me so to build on from the tutorial I watched, I
          researched until I found{' '}
          <a href='http://paulbourke.net/fractals/lsys/'>this resource</a>. This
          resource then allowed me to implement a number of different interesing
          looking trees as it outlined the mathematical rules needed to create
          them which i was able to codify.
        </p>
        <p>
          The Pendulum again was inspired by a <a href=''>Coding Train Video</a>
          . Here I learnt how more complex mathematical formulas could be
          codified and I extended the project by adding sliders at the bottom
          that allowed you to manipulate values in the equation. This was to
          allow the user to see the effects of changing a value like gravity for
          example in real time.
        </p>
        <img
          src='https://p5js.org/assets/img/p5js.svg'
          alt='p5.js'
          className='h-8'
        />
      </div>
    </>
  )
}
