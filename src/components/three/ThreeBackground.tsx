import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ThreeBackground = () => {
    const mountRef = useRef<HTMLDivElement>(null)
    const sceneRef = useRef<THREE.Scene>(null)
    const rendererRef = useRef<THREE.WebGLRenderer>(null)
    const waveRef = useRef<THREE.Mesh>(null)
    const mouseRef = useRef({ x: 0, y: 0 })
    const timeRef = useRef(0)

    useEffect(() => {
        if (!mountRef.current) return

        // Scene setup
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0x000000)
        sceneRef.current = scene

        // Camera
        const camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        camera.position.set(0, 0, 4)

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
        })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setClearColor(0x000000, 1)
        rendererRef.current = renderer
        mountRef.current.appendChild(renderer.domElement)

        // Create detailed wave geometry
        const segments = 128
        const geometry = new THREE.PlaneGeometry(8, 5, segments, segments)

        // Vertex shader for realistic wave effect
        const vertexShader = `
      uniform float uTime;
      uniform vec2 uMouse;
      varying vec3 vPosition;
      varying float vElevation;
      
      void main() {
        vec3 pos = position;
        
        // Multiple wave layers for complexity
        float wave1 = sin(pos.x * 2.0 + uTime * 2.0) * 0.1;
        float wave2 = sin(pos.y * 3.0 + uTime * 1.5) * 0.05;
        float wave3 = sin(distance(pos.xy, vec2(0.0)) * 4.0 - uTime * 3.0) * 0.08;
        
        // Mouse interaction
        float mouseDistance = distance(pos.xy, uMouse * 2.0);
        float mouseEffect = smoothstep(2.0, 0.0, mouseDistance) * 0.3;
        
        // Flowing wave pattern
        float flowX = sin(pos.x * 1.5 + uTime) * cos(pos.y * 0.8 + uTime * 0.7) * 0.12;
        float flowY = cos(pos.x * 0.9 + uTime * 1.2) * sin(pos.y * 1.8 + uTime * 0.5) * 0.08;
        
        pos.z = wave1 + wave2 + wave3 + mouseEffect + flowX + flowY;
        vElevation = pos.z;
        vPosition = pos;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `

        // Fragment shader for particle-like appearance
        const fragmentShader = `
      varying vec3 vPosition;
      varying float vElevation;
      
      void main() {
        // Create particle grid effect
        vec2 grid = fract(vPosition.xy * 25.0);
        float pattern = smoothstep(0.0, 0.1, grid.x) * smoothstep(0.0, 0.1, grid.y);
        pattern *= smoothstep(0.9, 1.0, grid.x) + smoothstep(0.9, 1.0, grid.y);
        
        // Height-based coloring
        float intensity = (vElevation + 0.2) * 2.0;
        intensity = clamp(intensity, 0.0, 1.0);
        
        vec3 color = vec3(1.0) * intensity * pattern;
        
        // Add some blue tint to elevated areas
        if(vElevation > 0.1) {
          color += vec3(0.1, 0.3, 0.6) * intensity;
        }
        
        gl_FragColor = vec4(color, pattern * intensity * 0.8);
      }
    `

        // Create shader material
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uMouse: { value: new THREE.Vector2(0, 0) }
            },
            transparent: true,
            side: THREE.DoubleSide
        })

        // Create wave mesh
        const wave = new THREE.Mesh(geometry, material)
        wave.rotation.x = -Math.PI * 0.3
        wave.position.y = -0.5
        waveRef.current = wave
        scene.add(wave)

        // Add additional particle system for depth
        const particleGeometry = new THREE.BufferGeometry()
        const particleCount = 2000
        const positions = new Float32Array(particleCount * 3)

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10
            positions[i * 3 + 1] = (Math.random() - 0.5) * 6
            positions[i * 3 + 2] = (Math.random() - 0.5) * 4
        }

        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

        const particleMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.02,
            transparent: true,
            opacity: 0.4,
            sizeAttenuation: true
        })

        const particles = new THREE.Points(particleGeometry, particleMaterial)
        scene.add(particles)

        // Mouse movement handler
        const handleMouseMove = (event: MouseEvent) => {
            mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
            mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
        }

        window.addEventListener('mousemove', handleMouseMove)

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate)
            timeRef.current += 0.01

            // Update wave shader uniforms
            if (waveRef.current && waveRef.current.material) {
                const material = waveRef.current.material as THREE.ShaderMaterial
                material.uniforms.uTime.value = timeRef.current
                material.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y)
            }

            // Animate background particles
            if (particles) {
                particles.rotation.y = timeRef.current * 0.1
                particles.rotation.x = Math.sin(timeRef.current * 0.5) * 0.1
            }

            renderer.render(scene, camera)
        }

        animate()

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('mousemove', handleMouseMove)
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement)
            }
            renderer.dispose()
            geometry.dispose()
            material.dispose()
            particleGeometry.dispose()
            particleMaterial.dispose()
        }
    }, [])

    return (
        <div
            ref={mountRef}
            className="absolute inset-0"
            style={{ zIndex: 0 }}
        />
    )
}

export default ThreeBackground