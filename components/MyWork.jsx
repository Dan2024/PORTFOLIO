import { animated } from '@react-spring/three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'
import React, { useRef } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'

// ------- mouse position -------
let mousePos = new THREE.Vector2(0, 0)

// ------- controls -------
extend({ OrbitControls })

const Controls = () => {
  const { camera, gl } = useThree()
  const orbRef = useRef()

  useFrame(() => {
    orbRef.current.update()
  })

  return <orbitControls args={[camera, gl.domElement]} ref={orbRef} />
}

// ------- box object -------
function RotatingBox() {
  const myMesh = React.useRef()

  return (
    <animated.mesh ref={myMesh} position={[0, 0, 0.25 * 0.5]}>
      <boxBufferGeometry />
      <meshPhongMaterial color='royalblue' />
    </animated.mesh>
  )
}

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x * 4, mouse.y * 3, camera.position.z),
      0.02
    )
  )
}

// ------- canvas -------
export default function MyWork() {
  return (
    <div className='w-[400px] h-[400px] shadow-xl ml-10'>
      <Canvas
        onMouseMove={(e) => {
          let x =
            e.clientX -
            e.target.getBoundingClientRect().left -
            e.target.getBoundingClientRect().width * 0.5
          let y =
            e.clientY -
            e.target.getBoundingClientRect().top -
            e.target.getBoundingClientRect().height * 0.5

          mousePos.x = x * 0.0001
          mousePos.y = y * 0.0001
          // console.log('x: ' + x + ' y: ' + y, mousePos.x, mousePos.y)
        }}
      >
        <Controls />
        <RotatingBox />
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 10, 5]} />
        <Rig />
      </Canvas>
    </div>
  )
}
