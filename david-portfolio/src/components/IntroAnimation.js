import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import "./IntroAnimation.css";

const IntroAnimation = ({ onEnter, userName = "David Diaz Clifton" }) => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x121212);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xff0055, 1, 100);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // Create a function to generate dynamic canvas textures with text
    const createTextTexture = (
      text,
      fontSize,
      color,
      width = 512,
      height = 128
    ) => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const context = canvas.getContext("2d");
      context.fillStyle = "rgba(0,0,0,0)"; // Transparent background
      context.fillRect(0, 0, width, height);

      // Set text properties
      context.font = `bold ${fontSize}px Arial, sans-serif`;
      context.textAlign = "center";
      context.textBaseline = "middle";

      // Add a subtle glow/shadow
      context.shadowColor = color;
      context.shadowBlur = 15;

      // Fill text
      context.fillStyle = color;
      context.fillText(text, width / 2, height / 2);

      // Create texture
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;

      return texture;
    };

    // Create text group
    const textGroup = new THREE.Group();
    scene.add(textGroup);

    // Main name
    const nameTexture = createTextTexture(userName, 60, "#00a2ff", 800, 120);
    const nameMaterial = new THREE.SpriteMaterial({
      map: nameTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const nameSprite = new THREE.Sprite(nameMaterial);
    nameSprite.scale.set(3, 0.5, 1);
    textGroup.add(nameSprite);

    // Subtitle
    const subtitleTexture = createTextTexture(
      "Full Stack Developer",
      30,
      "#ff3864"
    );
    const subtitleMaterial = new THREE.SpriteMaterial({
      map: subtitleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const subtitleSprite = new THREE.Sprite(subtitleMaterial);
    subtitleSprite.scale.set(2.5, 0.4, 1);
    subtitleSprite.position.set(0, -0.7, 0);
    textGroup.add(subtitleSprite);

    // Enter prompt
    const enterTexture = createTextTexture(24, "#ffffff");
    const enterMaterial = new THREE.SpriteMaterial({
      map: enterTexture,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const enterSprite = new THREE.Sprite(enterMaterial);
    enterSprite.scale.set(2, 0.35, 1);
    enterSprite.position.set(0, -1.5, 0);
    textGroup.add(enterSprite);

    // Pulsing animation for "Click to Enter" text
    let enterOpacity = { value: 0.8 };
    const pulseAnimation = () => {
      enterOpacity.value = 0.4 + Math.abs(Math.sin(Date.now() * 0.002)) * 0.6;
      enterMaterial.opacity = enterOpacity.value;
      requestAnimationFrame(pulseAnimation);
    };
    pulseAnimation();

    // 3D elements for depth
    const addDecorative3DElements = () => {
      // Add some 3D shapes around the text for depth
      const geometry = new THREE.IcosahedronGeometry(0.3, 0);
      const smallGeometry = new THREE.IcosahedronGeometry(0.15, 0);

      const materials = [
        new THREE.MeshPhongMaterial({ color: 0x00a2ff, shininess: 100 }),
        new THREE.MeshPhongMaterial({ color: 0xff3864, shininess: 100 }),
      ];

      // Create a few decorative elements and position them around the text
      const positions = [
        { x: -1.5, y: 0.8, z: -1, size: "large", material: 0 },
        { x: 1.8, y: 0.5, z: -0.5, size: "small", material: 1 },
        { x: -1.2, y: -0.5, z: -0.8, size: "small", material: 1 },
        { x: 1.5, y: -0.8, z: -0.7, size: "large", material: 0 },
      ];

      positions.forEach((pos) => {
        const geo = pos.size === "large" ? geometry : smallGeometry;
        const element = new THREE.Mesh(geo, materials[pos.material]);
        element.position.set(pos.x, pos.y, pos.z);
        textGroup.add(element);

        // Add animations to these elements
        const initialY = pos.y;
        const initialX = pos.x;

        // Store original position for animation
        element.userData = {
          initialY,
          initialX,
          speedY: Math.random() * 0.001 + 0.001,
          speedX: Math.random() * 0.001 + 0.001,
          phase: Math.random() * Math.PI * 2,
        };
      });
    };

    addDecorative3DElements();

    // Particles background for depth
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Animation loop
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

    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX = mouseX * 0.3;
      targetY = mouseY * 0.3;

      // Move text group based on mouse
      if (textGroup) {
        textGroup.rotation.y = THREE.MathUtils.lerp(
          textGroup.rotation.y,
          targetX * 0.2,
          0.05
        );
        textGroup.rotation.x = THREE.MathUtils.lerp(
          textGroup.rotation.x,
          -targetY * 0.2,
          0.05
        );

        // Animate decorative elements
        textGroup.children.forEach((child) => {
          if (child.userData && child.userData.initialY !== undefined) {
            // Gentle floating animation
            child.position.y =
              child.userData.initialY +
              Math.sin(
                elapsedTime * child.userData.speedY * 5 + child.userData.phase
              ) *
                0.2;

            child.position.x =
              child.userData.initialX +
              Math.sin(
                elapsedTime * child.userData.speedX * 3 + child.userData.phase
              ) *
                0.1;

            // Slow rotation
            child.rotation.x = elapsedTime * 0.2;
            child.rotation.y = elapsedTime * 0.3;
          }
        });
      }

      // Rotate particles
      particlesMesh.rotation.y = elapsedTime * 0.05;

      // Move particles based on mouse
      particlesMesh.rotation.x = mouseY * 0.01;
      particlesMesh.rotation.y += mouseX * 0.001;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();
    setIsLoaded(true);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", onDocumentMouseMove);
      document.removeEventListener("touchmove", onDocumentTouchMove);
    };
  }, [userName]);

  return (
    <div
      ref={containerRef}
      className={`intro-animation-container ${isLoaded ? "clickable" : ""}`}
      onClick={isLoaded ? onEnter : undefined}
    >
      {!isLoaded && <div className="loading-indicator">Loading...</div>}
      {isLoaded && <div className="enter-hint">Click anywhere to enter</div>}
    </div>
  );
};

export default IntroAnimation;
