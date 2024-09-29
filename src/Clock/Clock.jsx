/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Clock(props) {
  const { nodes, materials } = useGLTF('/Digital clock.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Digital_clock_Cube-Mesh'].geometry}
        material={materials['78909C']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Digital_clock_Cube-Mesh_1'].geometry}
        material={materials['455A64']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Digital_clock_Cube-Mesh_2'].geometry}
        material={materials['1A1A1A']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Digital_clock_Cube-Mesh_3'].geometry}
        material={materials.F44336}
      />
    </group>
  )
}

useGLTF.preload('/Digital clock.glb')
