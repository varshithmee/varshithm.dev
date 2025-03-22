"use client";

import {useGLTF} from "@react-three/drei";
import React, {useRef} from "react";
import type {Mesh, MeshStandardMaterial} from "three";
import * as THREE from "three";
import type {GLTF} from "three-stdlib";
import {Canvas, useFrame} from "@react-three/fiber";
import {motion} from "framer-motion-3d";
import {Bloom, EffectComposer} from "@react-three/postprocessing";
import {BlendFunction} from "postprocessing";

type GLTFResult = GLTF & {
	nodes: {
		nurbsToPoly1001: Mesh;
		stamendisk_proto_v1obj: Mesh;
		petal_proto2obj: Mesh;
		stamen_proto_2obj: Mesh;
	};
	materials: {
		"initialShadingGroup.002": MeshStandardMaterial;
		"Default.017": MeshStandardMaterial;
		"Default.016": MeshStandardMaterial;
		"Default.025": MeshStandardMaterial;
	};
};

type FlowerProps = JSX.IntrinsicElements["group"] & {
	delay: number;
	position: THREE.Vector3;
};
export function Flower(props: FlowerProps) {
	const { nodes, materials } = useGLTF(
		"/wildflower-transformed.glb",
	) as GLTFResult;

	return (
		<group {...props} dispose={null}>
			<motion.mesh
				initial={{ scaleX: 0, scaleY: 0, scaleZ: 0 }}
				animate={{ scaleX: 0.128, scaleY: 0.185, scaleZ: 0.128 }}
				transition={{ delay: props.delay, duration: 3, ease: "easeOut" }}
				geometry={nodes.nurbsToPoly1001.geometry}
				material={materials["initialShadingGroup.002"]}
				rotation={[Math.PI / 2, 0, 0]}
			/>

			<motion.group
				initial={{ scale: 0, x: 0, y: 0, z: 0 }}
				animate={{ scale: 1 }}
				position={[0.15, 5.385, -0.203]}
				transition={{ delay: props.delay, duration: 3, ease: "easeOut" }}
			>
				<motion.mesh
					geometry={nodes.stamendisk_proto_v1obj.geometry}
					material={materials["Default.017"]}
					position={[0.15, 5.385, -0.203]}
					scale={-0.016}
					rotation={[-0.867, 0.252, 2.512]}
				/>
				<motion.mesh
					geometry={nodes.petal_proto2obj.geometry}
					material={materials["Default.016"]}
					scale={1.19}
					position={[0.266, 5.143, -0.353]}
					rotation={[2.852, -1.135, 2.268]}
				/>
				<motion.mesh
					geometry={nodes.stamen_proto_2obj.geometry}
					material={materials["Default.025"]}
					position={[0.015, 5.338, -0.224]}
					scale={0.93}
					rotation={[0.566, -0.829, 0.048]}
				/>
				{Array.from({ length: 10 }, () => 0).map(() => (
					<Firefly
						key={`firefly-${crypto.randomUUID()}`}
						targetRangeMaxX={5}
						targetRangeMaxY={7}
						targetRangeMaxZ={1}
						targetRangeMinX={-5}
						targetRangeMinY={4}
						targetRangeMinZ={-0.1}
					/>
				))}
			</motion.group>
		</group>
	);
}

useGLTF.preload("/wildflower-transformed.glb");

function Firefly({
	targetRangeMaxX,
	targetRangeMinX,
	targetRangeMaxY,
	targetRangeMinY,
	targetRangeMaxZ,
	targetRangeMinZ,
}: {
	targetRangeMaxX: number;
	targetRangeMaxY: number;
	targetRangeMaxZ: number;
	targetRangeMinX: number;
	targetRangeMinY: number;
	targetRangeMinZ: number;
}) {
	const flyRef = useRef<Mesh>(null);
	// Store velocity and target position
	const velocity = useRef(new THREE.Vector3(0, 0, 0));
	const targetPosition = useRef(new THREE.Vector3());

	// Initial position
	const position = new THREE.Vector3(
		Math.random() * 7 - 1,
		Math.random() * 2 - 5,
		Math.random() * 7 - 5,
	);

	// Generate new random target position
	const updateTarget = () => {
		targetPosition.current.set(
			Math.random() * (targetRangeMaxX - targetRangeMinX) + targetRangeMinX,
			Math.random() * (targetRangeMaxY - targetRangeMinY) + targetRangeMinY,
			Math.random() * (targetRangeMaxZ - targetRangeMinZ) + targetRangeMinZ,
		);
	};

	// Initialize first target
	updateTarget();

	useFrame((state, delta) => {
		if (!flyRef.current) return;

		// Calculate direction to target
		const direction = new THREE.Vector3().subVectors(
			targetPosition.current,
			flyRef.current.position,
		);

		// Get distance to target
		const distance = direction.length();

		// If we're close to target, generate new one
		if (distance < 0.1) {
			updateTarget();
		}

		// Normalize direction and apply speed
		direction.normalize().multiplyScalar(0.5);

		// Smooth velocity changes (steering behavior)
		velocity.current.lerp(direction, 0.1);

		// Update position
		flyRef.current.position.add(velocity.current.clone().multiplyScalar(delta));

		// Add subtle wobble
		flyRef.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.002;
	});

	return (
		<mesh ref={flyRef} position={position} scale={1}>
			<sphereGeometry args={[0.04, 36, 36]} />
			<meshStandardMaterial
				emissive={new THREE.Color("#caf816")}
				emissiveIntensity={2}
				toneMapped={false}
			/>
			<pointLight color={"white"} intensity={1} distance={2} decay={2} />
		</mesh>
	);
}

export default function Wildflower() {
	return (
		<main className={"w-screen h-screen top-0 left-0 fixed "}>
			<Canvas>
				<Flower position={new THREE.Vector3(1.8, -4.8, 0)} delay={0.8} />
				<Flower
					position={new THREE.Vector3(4.5, -8, -4)}
					rotation={[0, -Math.PI / 3, 0]}
					delay={0.5}
				/>
				<Flower
					position={new THREE.Vector3(9, -8, -4)}
					rotation={[0, 0, 0]}
					delay={1}
				/>
				<Flower
					position={new THREE.Vector3(8, -6, -1)}
					rotation={[0, -Math.PI / 21, 0]}
					delay={1}
				/>{" "}
				<Flower
					position={new THREE.Vector3(0.4, -2.5, 1.9)}
					scale={0.4}
					rotation={[0, -Math.PI / 36, Math.PI / 9]}
					delay={1}
				/>
				<ambientLight intensity={0.0} />
				<EffectComposer>
					<Bloom
						attach={"bloom"}
						blendFunction={BlendFunction.ADD}
						intensity={1.0} // The bloom intensity.
						luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
						luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
						mipmapBlur={false} // Enables or disables mipmap blur.
					/>
				</EffectComposer>
			</Canvas>
		</main>
	);
}
