/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Floor (props) {
  const { nodes, materials } = useGLTF('/BakedFloor (2).glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane058.geometry}
        material={nodes.Plane058.material}
        position={[-78.828, 167.537, 216.301]}
        rotation={[-Math.PI / 2, 0, 0.436]}
        scale={[-23.472, -1.472, -4.783]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane057.geometry}
        material={nodes.Plane057.material}
        position={[-78.828, 187.131, 217.216]}
        rotation={[-Math.PI / 2, 0, 0.436]}
        scale={[-23.472, -1.472, -4.783]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.Floor}
        position={[15.148, 113.992, 36.828]}
        scale={702.138}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials['Material.002']}
        position={[-81.918, 213.627, 212.088]}
        rotation={[Math.PI / 2, 0, -2.021]}
        scale={[2.269, 30.09, 1.827]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials['Material.002']}
        position={[-59.681, 208.042, 200.511]}
        rotation={[Math.PI, 1.121, 0]}
        scale={[-0.415, -5.026, -0.415]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['Material.002']}
        position={[-104.713, 208.042, 223.911]}
        rotation={[Math.PI, 1.121, 0]}
        scale={[-0.415, -5.026, -0.415]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.002']}
        position={[-80.904, 153.453, 215.148]}
        rotation={[0, -1.121, 0]}
        scale={[1.542, 61.591, 1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.001']}
        position={[-104.825, 201.446, 222.818]}
        scale={5.315}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials['Material.012']}
        position={[-59.203, 200.551, 200.534]}
        scale={5.315}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[-78.828, 149.645, 216.301]}
        rotation={[-Math.PI / 2, 0, 0.436]}
        scale={[-23.472, -1.472, -4.783]}
      />
    </group>
  )
}

useGLTF.preload('/BakedFloor (2).glb')