"use client";

import { useGLTF } from "@react-three/drei";
import React, { Suspense, useEffect, useRef, useState, useMemo } from "react";
import type { Mesh, MeshStandardMaterial, Group } from "three";
import * as THREE from "three";
import type { GLTF } from "three-stdlib";
import { Canvas, useFrame } from "@react-three/fiber";
import {
	Bloom,
	EffectComposer,
	ToneMapping,
} from "@react-three/postprocessing";
import { BlendFunction, ToneMappingMode } from "postprocessing";
import useSettingsStore from "@/lib/SettingsStore";

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

// Optimized firefly with more efficient point light settings
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
	const groupRef = useRef<Group>(null);
	const flyRef = useRef<Mesh>(null);
	// Store velocity and target position
	const velocity = useRef(new THREE.Vector3(0, 0, 0));
	const targetPosition = useRef(new THREE.Vector3());

	// Initial position - using useMemo to prevent recreation on rerenders
	const position = useMemo(
		() =>
			new THREE.Vector3(
				Math.random() * 7 - 1,
				Math.random(),
				Math.random() * 7 - 5,
			),
		[],
	);

	// Generate new random target position
	const updateTarget = () => {
		targetPosition.current.set(
			Math.random() * (targetRangeMaxX - targetRangeMinX) + targetRangeMinX,
			Math.random() * (targetRangeMaxY - targetRangeMinY) + targetRangeMinY,
			Math.random() * (targetRangeMaxZ - targetRangeMinZ) + targetRangeMinZ,
		);
	};

	// Initialize first target using useEffect to ensure it runs only once
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		updateTarget();
	}, []);

	useFrame((state, delta) => {
		if (!groupRef.current) return;

		// Calculate direction to target
		const direction = new THREE.Vector3().subVectors(
			targetPosition.current,
			groupRef.current.position,
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
		groupRef.current.position.add(
			velocity.current.clone().multiplyScalar(delta),
		);

		// Add subtle wobble
		groupRef.current.position.y +=
			Math.sin(state.clock.elapsedTime * 2) * 0.002;
	});

	return (
		<group ref={groupRef} position={position}>
			<mesh ref={flyRef} scale={1} castShadow>
				<sphereGeometry args={[0.04, 4, 8]} />
				<meshStandardMaterial
					emissive={new THREE.Color("#caf816")}
					emissiveIntensity={2}
				/>
				<pointLight
					color={"white"}
					intensity={1}
					distance={2}
					decay={2}
					castShadow={false} // Disable shadow casting for firefly lights
					shadow-mapSize-width={256} // Reduced shadow map size
					shadow-mapSize-height={256} // Reduced shadow map size
				/>
			</mesh>
		</group>
	);
}

export function Flower(props: FlowerProps) {
	const { nodes, materials } = useGLTF(
		"/wildflower-transformed.glb",
	) as GLTFResult;

	return (
		<group {...props} dispose={null}>
			<mesh
				scale={[0.128, 0.185, 0.128]}
				geometry={nodes.nurbsToPoly1001.geometry}
				material={materials["initialShadingGroup.002"]}
				rotation={[Math.PI / 2, 0, 0]}
				castShadow
				receiveShadow
			/>

			<group position={[0, 0, 0]}>
				<mesh
					geometry={nodes.stamendisk_proto_v1obj.geometry}
					material={materials["Default.017"]}
					position={[0.15, 5.385, -0.203]}
					scale={-0.016}
					rotation={[-0.867, 0.252, 2.512]}
					castShadow
					receiveShadow
				/>
				<mesh
					geometry={nodes.petal_proto2obj.geometry}
					material={materials["Default.016"]}
					scale={1.19}
					position={[0.266, 5.143, -0.353]}
					rotation={[2.852, -1.135, 2.268]}
					castShadow
					receiveShadow
				/>
				<mesh
					geometry={nodes.stamen_proto_2obj.geometry}
					material={materials["Default.025"]}
					position={[0.015, 5.338, -0.224]}
					scale={0.93}
					rotation={[0.566, -0.829, 0.048]}
					castShadow
					receiveShadow
				/>
				<Suspense fallback={null}>
					{Array.from({ length: 6 }).map((_, index) => (
						<Firefly
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={`firefly-${index}`}
							targetRangeMaxX={5}
							targetRangeMaxY={7}
							targetRangeMaxZ={1}
							targetRangeMinX={-5}
							targetRangeMinY={4}
							targetRangeMinZ={-0.1}
						/>
					))}
				</Suspense>
			</group>
		</group>
	);
}

useGLTF.preload("/wildflower-transformed.glb");

export default function Wildflower() {
	// Get 3D enabled state from Zustand store
	const is3DEnabled = useSettingsStore((state) => state.is3DEnabled);

	// Performance settings for the entire scene
	const [dpr, setDpr] = useState<[number, number]>([1, 2]); // Default pixel ratio

	// Set optimal DPR based on device capability on mount only
	useEffect(() => {
		const optimalDpr = Math.min(1.5, window.devicePixelRatio);
		setDpr([1, optimalDpr]);
	}, []);

	// If 3D is disabled, don't render anything
	if (!is3DEnabled) {
		return null;
	}

	// Otherwise, render the 3D scene
	return (
		<main className="w-screen h-screen top-0 left-0 fixed pointer-events-none">
			<Canvas
				dpr={dpr}
				gl={{
					powerPreference: "high-performance",
					antialias: false,
					stencil: false,
				}}
			>
				<color attach="background" args={["#000000"]} />
				<fog attach="fog" args={["#000000", 10, 40]} />

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
				/>
				<Flower
					position={new THREE.Vector3(0.4, -2.5, 1.9)}
					scale={0.4}
					rotation={[0, -Math.PI / 36, Math.PI / 9]}
					delay={1}
				/>

				{/* Main light source - optimized settings */}
				<ambientLight intensity={0.02} />

				<EffectComposer>
					<Bloom
						blendFunction={BlendFunction.ADD}
						intensity={1.0}
						luminanceThreshold={0.9}
						luminanceSmoothing={0.025}
						mipmapBlur={false}
					/>
					<ToneMapping
						blendFunction={BlendFunction.NORMAL}
						mode={ToneMappingMode.REINHARD} // Reinhard tone mapping
					/>
				</EffectComposer>
			</Canvas>
		</main>
	);
}
