import { animated } from '@react-spring/three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { ContactShadows, PerspectiveCamera } from '@react-three/drei'

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
    <mesh ref={myMesh}>
      <boxBufferGeometry />
      <meshPhongMaterial color='royalblue' />
    </mesh>
  )
}

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x * 3, mouse.y * 2, camera.position.z),
      0.02
    )
  )
}
// ------- portfolio -------
const PortfolioMonitor = () => {
  const [model, setModel] = useState()

  useEffect(() => {
    new GLTFLoader().load('/portfolio-monitor-3.glb', setModel)
  })

  return model ? (
    <primitive castShadow object={model.scene} position={[0, -0.5, 0]} />
  ) : null
}

const Floor = () => {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -3, 0]}>
      <planeBufferGeometry attach='geometry' args={[30, 10]} />
      <meshStandardMaterial attach='material' color='#528998' />
    </mesh>
    // <mesh rotation={1.57} position={[0, -5, 0]}>
    //   <planeGeometry args={[7, 7]} />
    //   <meshStandardMaterial color='#000' />
    // </mesh>
  )
}

function Light({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  )
}

function KeyLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  )
}
function FillLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      intensity={brightness}
      color={color}
      position={[2, 1, 4]}
      lookAt={[0, 0, 0]}
      penumbra={2}
      castShadow
    />
  )
}
function RimLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={brightness}
      color={color}
      position={[1, 4, -2]}
      rotation={[0, 180, 0]}
      castShadow
    />
  )
}

// ------- canvas -------
export default function MyWork() {
  return (
    <div className='w-[500px] h-[400px] shadow-xl ml-10'>
      <Canvas
        // camera={{ position: [0, 0, 11], near: 5, far: 20 }}
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
        {/* <RotatingBox /> */}
        <Floor />
        <PerspectiveCamera makeDefault position={[0, 3, 9]} />
        <ambientLight intensity={1} />
        <Light brightness={6} color={'white'} />
        <KeyLight brightness={5.6} color='#ffbdf4' />
        <FillLight brightness={2.6} color='#bdefff' />
        <RimLight brightness={54} color='#fff' />
        <Rig />
        <PortfolioMonitor />
      </Canvas>
    </div>
  )
}
