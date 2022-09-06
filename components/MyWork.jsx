// import Image from 'next/image'

// export default function MyWork() {
//   return (
//     <section className='max-w-7xl mx-auto'>
//       <h2>My Work</h2>
//       <div className=''>
//         <div className='w-1/2 h-96 relative overflow-hidden rounded-2xl'>
//           <Image
//             src='/codified.png'
//             layout='fill'
//             objectFit='cover'
//             objectPosition='top center'
//             quality='1'
//           />
//           <div>
//             <p>
//               CODIFEYED is a website I created focusing on Front-End design and
//               computer science topics i was only able to very briefly cover in
//               my bootcamp.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { useSpring, animated, config } from '@react-spring/three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'
import React, { Suspense, useState, useEffect, useRef } from 'react'
import {
  Canvas,
  useLoader,
  useFrame,
  useThree,
  extend,
} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { OrbitControls, draco } from '@react-three/drei'

extend({ OrbitControls })

const Controls = () => {
  const { camera, gl } = useThree()
  const orbRef = useRef()

  useFrame(() => {
    orbRef.current.update()
  })

  return (
    <orbitControls
      autoRotate
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbRef}
    />
  )
}

function RotatingBox() {
  const [active, setActive] = useState(false)

  const { scale } = useSpring({
    scale: active ? 1.5 : 1,
    config: config.wobbly,
  })

  return (
    <animated.mesh scale={scale} onClick={() => setActive(!active)}>
      <boxBufferGeometry />
      <meshPhongMaterial color='royalblue' />
    </animated.mesh>
  )
}

export default function MyWork() {
  return (
    <div className='w-[400px] h-[400px] shadow-xl'>
      <Canvas>
        <Controls />
        <RotatingBox />
        <ambientLight intensity={0.1} />
        <directionalLight />
      </Canvas>
    </div>
  )
}
