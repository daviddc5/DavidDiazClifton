import React, { useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import "./IntroAnimation.css";

const IntroAnimation = ({
  onEnter,
  userName = "David Diaz Clifton",
  title = "Full Stack Developer",
  backgroundColor = "#f5f5f7",
}) => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState(0); // 0: normal, 1: zooming, 2: fading

  // Nintendo Switch colors as constants
  const SWITCH_COLORS = useMemo(
    () => ({
      red: 0xe60012, // Red Joy-Con color
      blue: 0x1eaaf1, // Blue Joy-Con color
      dark: 0x1a1a1a, // Dark text color
      light: 0xf5f5f7, // Light background color
    }),
    []
  );

  // Handle click event with elaborate transition
  const handleEnter = () => {
    if (isLoaded && !isEntering) {
      setIsEntering(true);
      setTransitionPhase(1); // Start zooming phase

      // Phase 1: Zoom effect (1.5 seconds)
      setTimeout(() => {
        setTransitionPhase(2); // Start fading phase

        // Phase 2: Final fade out (1 second)
        setTimeout(() => {
          onEnter && onEnter();
        }, 1000);
      }, 1500);
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor);

    // Camera setup with dynamic aspect ratio
    const aspect = window.innerWidth / window.innerHeight;
    const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    camera.position.z = 5;

    // Renderer with better pixel ratio handling
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });

    // Use device pixel ratio but cap it to avoid performance issues
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Improved lighting for better visual effect
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Dynamic color accent point light
    const pointLight = new THREE.PointLight(SWITCH_COLORS.red, 1, 100);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // Secondary accent light for better depth
    const secondaryLight = new THREE.PointLight(SWITCH_COLORS.blue, 0.8, 50);
    secondaryLight.position.set(-5, 3, 2);
    scene.add(secondaryLight);

    // Create text texture function with improved readability
    const createTextTexture = (
      text,
      fontSize,
      color,
      width = 512,
      height = 128,
      bold = true
    ) => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const context = canvas.getContext("2d");
      context.clearRect(0, 0, width, height);

      // Set text properties
      const fontWeight = bold ? "bold" : "normal";
      context.font = `${fontWeight} ${fontSize}px Roboto, sans-serif`;
      context.textAlign = "center";
      context.textBaseline = "middle";

      // Add a subtle glow/shadow with improved readability
      context.shadowColor = color;
      context.shadowBlur = 12;

      // Add a subtle background halo for better contrast
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;

      // Fill text
      context.fillStyle = color;
      context.fillText(text, width / 2, height / 2);

      // Create texture
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;

      return texture;
    };

    // Create text group with better organization
    const textGroup = new THREE.Group();
    scene.add(textGroup);

    // Main name - using Switch blue for impact
    const nameTexture = createTextTexture(
      userName,
      60,
      `#1eaaf1`, // Switch blue
      800,
      120
    );
    const nameMaterial = new THREE.SpriteMaterial({
      map: nameTexture,
      transparent: true,
      blending: THREE.NormalBlending,
    });

    const nameSprite = new THREE.Sprite(nameMaterial);
    nameSprite.scale.set(3, 0.5, 1);
    textGroup.add(nameSprite);

    // Subtitle - using Switch red
    const subtitleTexture = createTextTexture(
      title,
      30,
      `#e60012` // Switch red
    );
    const subtitleMaterial = new THREE.SpriteMaterial({
      map: subtitleTexture,
      transparent: true,
      blending: THREE.NormalBlending,
    });

    const subtitleSprite = new THREE.Sprite(subtitleMaterial);
    subtitleSprite.scale.set(2.5, 0.4, 1);
    subtitleSprite.position.set(0, -0.7, 0);
    textGroup.add(subtitleSprite);

    // Enter prompt with improved animation
    const enterTexture = createTextTexture(
      "Click to Enter",
      24,
      `#1a1a1a`, // Switch dark
      512,
      128,
      false // non-bold for subtlety
    );
    const enterMaterial = new THREE.SpriteMaterial({
      map: enterTexture,
      transparent: true,
      opacity: 0.8,
      blending: THREE.NormalBlending,
    });

    const enterSprite = new THREE.Sprite(enterMaterial);
    enterSprite.scale.set(2, 0.35, 1);
    enterSprite.position.set(0, -1.5, 0);
    textGroup.add(enterSprite);

    // Improved pulsing animation with smoother transitions
    const pulseAnimation = () => {
      const time = Date.now() * 0.001; // Slower for smoother effect
      enterMaterial.opacity = 0.4 + Math.abs(Math.sin(time)) * 0.6;
      requestAnimationFrame(pulseAnimation);
    };
    pulseAnimation();

    // 3D elements for depth with enhanced visual appeal
    const addDecorative3DElements = () => {
      // More variety in 3D shapes
      const geometries = [
        new THREE.IcosahedronGeometry(0.3, 0), // Spiky shape
        new THREE.DodecahedronGeometry(0.25, 0), // More rounded
        new THREE.OctahedronGeometry(0.2, 0), // Diamond-like
        new THREE.TetrahedronGeometry(0.22, 0), // Pyramid-like
      ];

      // Enhanced materials with better light reflection
      const materials = [
        new THREE.MeshPhongMaterial({
          color: SWITCH_COLORS.blue,
          shininess: 100,
          specular: 0x111111,
        }),
        new THREE.MeshPhongMaterial({
          color: SWITCH_COLORS.red,
          shininess: 100,
          specular: 0x111111,
        }),
        new THREE.MeshStandardMaterial({
          color: SWITCH_COLORS.blue,
          metalness: 0.3,
          roughness: 0.7,
        }),
        new THREE.MeshStandardMaterial({
          color: SWITCH_COLORS.red,
          metalness: 0.3,
          roughness: 0.7,
        }),
      ];

      // More decorative elements with better positioning
      const positions = [
        { x: -1.5, y: 0.8, z: -1, geo: 0, mat: 0 },
        { x: 1.8, y: 0.5, z: -0.5, geo: 1, mat: 1 },
        { x: -1.2, y: -0.5, z: -0.8, geo: 2, mat: 1 },
        { x: 1.5, y: -0.8, z: -0.7, geo: 0, mat: 0 },
        { x: -1.8, y: 0.2, z: -1.2, geo: 3, mat: 3 },
        { x: 2.0, y: -0.3, z: -0.9, geo: 2, mat: 2 },
        { x: 0.8, y: 1.0, z: -1.0, geo: 1, mat: 1 },
        { x: -0.9, y: -1.1, z: -0.7, geo: 3, mat: 0 },
      ];

      positions.forEach((pos) => {
        const element = new THREE.Mesh(geometries[pos.geo], materials[pos.mat]);
        element.position.set(pos.x, pos.y, pos.z);

        // Add random initial rotation for variety
        element.rotation.x = Math.random() * Math.PI;
        element.rotation.y = Math.random() * Math.PI;

        textGroup.add(element);

        // Enhanced animation parameters
        element.userData = {
          initialY: pos.y,
          initialX: pos.x,
          speedY: Math.random() * 0.001 + 0.0005, // Slower for smoother motion
          speedX: Math.random() * 0.001 + 0.0005,
          rotSpeedX: (Math.random() - 0.5) * 0.001, // Random rotation direction
          rotSpeedY: (Math.random() - 0.5) * 0.001,
          phase: Math.random() * Math.PI * 2,
          amplitude: 0.1 + Math.random() * 0.2, // Random movement amount
        };
      });
    };

    addDecorative3DElements();

    // Improved particle system with dynamic sizing
    const createParticleSystem = () => {
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = Math.min(
        1000,
        Math.floor((window.innerWidth * window.innerHeight) / 2000)
      );
      const posArray = new Float32Array(particlesCount * 3);
      const sizeArray = new Float32Array(particlesCount);

      // Generate random positions in a more aesthetically pleasing distribution
      for (let i = 0; i < particlesCount; i++) {
        // Position (x, y, z)
        const i3 = i * 3;

        // Use spherical distribution for more natural look
        const radius = 5 + Math.random() * 15; // Vary the distance
        const theta = Math.random() * Math.PI * 2; // Random angle in XZ plane
        const phi = Math.acos(2 * Math.random() - 1); // Random angle from Y axis

        posArray[i3] = radius * Math.sin(phi) * Math.cos(theta);
        posArray[i3 + 1] = radius * Math.cos(phi);
        posArray[i3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

        // Varied sizes for depth perception
        sizeArray[i] = 0.02 + Math.random() * 0.04;
      }

      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(posArray, 3)
      );

      particlesGeometry.setAttribute(
        "size",
        new THREE.BufferAttribute(sizeArray, 1)
      );

      // Custom shader material for better looking particles
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        sizeAttenuation: true,
        color: SWITCH_COLORS.dark,
        transparent: true,
        opacity: 0.5,
        blending: THREE.NormalBlending,
      });

      const particlesMesh = new THREE.Points(
        particlesGeometry,
        particlesMaterial
      );

      scene.add(particlesMesh);

      return particlesMesh;
    };

    const particlesMesh = createParticleSystem();

    // Create transition effect elements
    const createTransitionEffects = () => {
      // Create a sphere for the zoom transition
      const transitionGeometry = new THREE.SphereGeometry(0.1, 32, 32);
      const transitionMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0,
      });

      const transitionSphere = new THREE.Mesh(
        transitionGeometry,
        transitionMaterial
      );
      transitionSphere.position.set(0, 0, 0);
      transitionSphere.scale.set(0.1, 0.1, 0.1);
      scene.add(transitionSphere);

      // Create particles for explosion effect
      const explosionGeometry = new THREE.BufferGeometry();
      const explosionCount = 300;
      const explosionPositions = new Float32Array(explosionCount * 3);
      const explosionColors = new Float32Array(explosionCount * 3);

      // Prepare particle positions (initially at center)
      for (let i = 0; i < explosionCount; i++) {
        const i3 = i * 3;
        explosionPositions[i3] = 0;
        explosionPositions[i3 + 1] = 0;
        explosionPositions[i3 + 2] = 0;

        // Alternate between red and blue particles
        if (i % 2 === 0) {
          explosionColors[i3] = 0.9; // R
          explosionColors[i3 + 1] = 0; // G
          explosionColors[i3 + 2] = 0.07; // B (Switch red)
        } else {
          explosionColors[i3] = 0.12; // R
          explosionColors[i3 + 1] = 0.67; // G
          explosionColors[i3 + 2] = 0.95; // B (Switch blue)
        }
      }

      explosionGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(explosionPositions, 3)
      );

      explosionGeometry.setAttribute(
        "color",
        new THREE.BufferAttribute(explosionColors, 3)
      );

      const explosionMaterial = new THREE.PointsMaterial({
        size: 0.1,
        transparent: true,
        opacity: 0,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
      });

      const explosionParticles = new THREE.Points(
        explosionGeometry,
        explosionMaterial
      );
      scene.add(explosionParticles);

      return { transitionSphere, explosionParticles };
    };

    const transitionEffects = createTransitionEffects();

    // Responsive interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onDocumentMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    };

    const onDocumentTouchMove = (event) => {
      if (event.touches.length > 0) {
        mouseX = (event.touches[0].clientX - window.innerWidth / 2) / 100;
        mouseY = (event.touches[0].clientY - window.innerHeight / 2) / 100;
      }
    };

    document.addEventListener("mousemove", onDocumentMouseMove);
    document.addEventListener("touchmove", onDocumentTouchMove);

    // Animation engine
    const clock = new THREE.Clock();
    let frameId = null;

    // Particle explosion directions - calculated only when needed
    let explosionDirections = null;
    let explosionSpeeds = null;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow with easing
      targetX = mouseX * 0.3;
      targetY = mouseY * 0.3;

      // Handle different transition phases
      if (transitionPhase === 1) {
        // Phase 1: Zoom effect

        // Hide the regular text and elements by scaling down
        if (textGroup.scale.x > 0.1) {
          textGroup.scale.x -= 0.05;
          textGroup.scale.y -= 0.05;
          textGroup.scale.z -= 0.05;
        }

        // Grow the transition sphere
        if (transitionEffects.transitionSphere.scale.x < 20) {
          transitionEffects.transitionSphere.scale.x += 0.4;
          transitionEffects.transitionSphere.scale.y += 0.4;
          transitionEffects.transitionSphere.scale.z += 0.4;
        }

        // Fade in the white sphere
        if (transitionEffects.transitionSphere.material.opacity < 0.8) {
          transitionEffects.transitionSphere.material.opacity += 0.02;
        }

        // Rotate camera slightly for more dramatic effect
        camera.rotation.z = Math.sin(elapsedTime * 2) * 0.05;
      } else if (transitionPhase === 2) {
        // Phase 2: Explosion effect

        // Initialize explosion effect if needed
        if (explosionDirections === null) {
          // Initialize explosion direction vectors
          const explosionCount =
            transitionEffects.explosionParticles.geometry.attributes.position
              .count;
          explosionDirections = new Array(explosionCount);
          explosionSpeeds = new Array(explosionCount);

          // Calculate random directions for particles
          for (let i = 0; i < explosionCount; i++) {
            // Random direction in a sphere
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            explosionDirections[i] = {
              x: Math.sin(phi) * Math.cos(theta),
              y: Math.sin(phi) * Math.sin(theta),
              z: Math.cos(phi),
            };

            // Random speed
            explosionSpeeds[i] = 0.05 + Math.random() * 0.15;
          }

          // Make explosion particles visible
          transitionEffects.explosionParticles.material.opacity = 1;
        }

        // Animate explosion particles
        const positions =
          transitionEffects.explosionParticles.geometry.attributes.position;

        for (let i = 0; i < positions.count; i++) {
          const i3 = i * 3;

          // Move particles outward in their directions
          positions.array[i3] += explosionDirections[i].x * explosionSpeeds[i];
          positions.array[i3 + 1] +=
            explosionDirections[i].y * explosionSpeeds[i];
          positions.array[i3 + 2] +=
            explosionDirections[i].z * explosionSpeeds[i];
        }

        // Update the positions buffer
        positions.needsUpdate = true;

        // Shrink the white sphere
        if (transitionEffects.transitionSphere.scale.x > 0.1) {
          transitionEffects.transitionSphere.scale.x *= 0.95;
          transitionEffects.transitionSphere.scale.y *= 0.95;
          transitionEffects.transitionSphere.scale.z *= 0.95;
        }

        // Fade out the white sphere
        if (transitionEffects.transitionSphere.material.opacity > 0) {
          transitionEffects.transitionSphere.material.opacity -= 0.05;
        }

        // Fade out explosion particles
        if (transitionEffects.explosionParticles.material.opacity > 0) {
          transitionEffects.explosionParticles.material.opacity -= 0.01;
        }
      } else {
        // Normal animation (phase 0)

        // Text group animations with improved smoothness
        if (textGroup) {
          // Smooth rotation following mouse
          textGroup.rotation.y = THREE.MathUtils.lerp(
            textGroup.rotation.y,
            targetX * 0.2,
            0.03 // Slower for smoother transition
          );

          textGroup.rotation.x = THREE.MathUtils.lerp(
            textGroup.rotation.x,
            -targetY * 0.2,
            0.03
          );

          // Subtle up/down floating motion for the entire group
          textGroup.position.y = Math.sin(elapsedTime * 0.3) * 0.05;

          // Animate each decorative element
          textGroup.children.forEach((child) => {
            if (child.userData && child.userData.initialY !== undefined) {
              // Enhanced floating animation
              child.position.y =
                child.userData.initialY +
                Math.sin(
                  elapsedTime * child.userData.speedY * 5 + child.userData.phase
                ) *
                  child.userData.amplitude;

              child.position.x =
                child.userData.initialX +
                Math.cos(
                  elapsedTime * child.userData.speedX * 3 + child.userData.phase
                ) *
                  (child.userData.amplitude * 0.5);

              // More varied rotation patterns
              child.rotation.x += child.userData.rotSpeedX;
              child.rotation.y += child.userData.rotSpeedY;
            }
          });
        }

        // Color shifting effect for the point light
        if (pointLight) {
          const r = 0.5 + 0.5 * Math.sin(elapsedTime * 0.3);
          const g = 0.5 + 0.5 * Math.sin(elapsedTime * 0.3 + 2);
          const b = 0.5 + 0.5 * Math.sin(elapsedTime * 0.3 + 4);
          pointLight.color.setRGB(r, g, b);
        }
      }

      // Particle animation (always active)
      particlesMesh.rotation.y = elapsedTime * 0.03; // Slower rotation
      particlesMesh.rotation.x = elapsedTime * 0.01; // Slower rotation

      // Subtle response to mouse movement
      particlesMesh.rotation.x += mouseY * 0.003;
      particlesMesh.rotation.y += mouseX * 0.003;

      // Check if we're still mounted
      if (!containerRef.current) return;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    // Start animation
    animate();
    setIsLoaded(true);

    // Responsive design - handle window resize
    const handleResize = () => {
      // Update camera
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function for unmounting
    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      // Remove event listeners
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", onDocumentMouseMove);
      document.removeEventListener("touchmove", onDocumentTouchMove);

      // Dispose of THREE.js resources to prevent memory leaks
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material.map) object.material.map.dispose();
          object.material.dispose();
        }
      });

      renderer.dispose();
    };
  }, [backgroundColor, userName, title, SWITCH_COLORS, transitionPhase]);

  return (
    <div
      ref={containerRef}
      className={`intro-animation-container ${isLoaded ? "clickable" : ""} ${
        transitionPhase > 0 ? "transitioning phase-" + transitionPhase : ""
      }`}
      onClick={handleEnter}
      aria-label="3D interactive intro animation, click to enter site"
    >
      {!isLoaded && (
        <div className="loading-indicator" aria-live="polite">
          <div className="nintendo-loading">
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
          </div>
        </div>
      )}

      {/* Sound effect when transitioning - only plays when clicked */}
      {transitionPhase > 0 && (
        <audio
          src="/sounds/switch-click.mp3"
          autoPlay
          className="transition-sound"
        />
      )}
    </div>
  );
};

export default IntroAnimation;
