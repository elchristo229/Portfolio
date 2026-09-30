import React, { useEffect, useRef } from 'react';

export default function NetworkField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let cancelled = false;
    let cleanup = () => {};

    const initialize = async () => {
      const THREE = await import('three');
      if (cancelled) return;

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const mobileQuery = window.matchMedia('(max-width: 700px)');
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: false,
          powerPreference: 'low-power',
        });
      } catch {
        return;
      }
      const count = mobileQuery.matches ? 24 : 52;
      const points = new Float32Array(count * 3);
      const velocities = new Float32Array(count * 3);
      const linePositions = new Float32Array(count * count * 6);
      const pointGeometry = new THREE.BufferGeometry();
      const pointAttribute = new THREE.BufferAttribute(points, 3);
      pointAttribute.setUsage(THREE.DynamicDrawUsage);
      pointGeometry.setAttribute('position', pointAttribute);

      const lineGeometry = new THREE.BufferGeometry();
      const lineAttribute = new THREE.BufferAttribute(linePositions, 3);
      lineAttribute.setUsage(THREE.DynamicDrawUsage);
      lineGeometry.setAttribute('position', lineAttribute);

      for (let index = 0; index < count; index += 1) {
        const offset = index * 3;
        points[offset] = (Math.random() - 0.5) * 46;
        points[offset + 1] = (Math.random() - 0.5) * 28;
        points[offset + 2] = (Math.random() - 0.5) * 10;
        velocities[offset] = (Math.random() - 0.5) * 0.006;
        velocities[offset + 1] = (Math.random() - 0.5) * 0.006;
      }

      const nodes = new THREE.Points(pointGeometry, new THREE.PointsMaterial({
        color: '#8df8ff',
        size: mobileQuery.matches ? 0.1 : 0.12,
        transparent: true,
        opacity: 0.52,
        sizeAttenuation: true,
      }));
      const links = new THREE.LineSegments(lineGeometry, new THREE.LineBasicMaterial({
        color: '#00f0ff',
        transparent: true,
        opacity: 0.075,
        depthWrite: false,
      }));
      scene.add(links, nodes);

      const target = new THREE.Vector3(100, 100, 0);
      const resize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;
        camera.position.z = mobileQuery.matches ? 36 : 30;
        camera.updateProjectionMatrix();
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobileQuery.matches ? 1 : 1.25));
        renderer.setSize(width, height, false);
      };
      const onPointerMove = (event) => {
        target.set(((event.clientX / window.innerWidth) * 2 - 1) * 22, (-(event.clientY / window.innerHeight) * 2 + 1) * 13, 0);
      };
      resize();
      if (!mobileQuery.matches) window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('resize', resize, { passive: true });

      const renderFrame = () => {
        let vertexCount = 0;
        const reach = mobileQuery.matches ? 5.4 : 6.2;
        const reachSquared = reach * reach;

        for (let index = 0; index < count; index += 1) {
          const offset = index * 3;
          if (!reducedMotion) {
            const dx = target.x - points[offset];
            const dy = target.y - points[offset + 1];
            if (dx * dx + dy * dy < 90) {
              velocities[offset] += dx * 0.000003;
              velocities[offset + 1] += dy * 0.000003;
            }
            points[offset] += velocities[offset];
            points[offset + 1] += velocities[offset + 1];
            velocities[offset] *= 0.999;
            velocities[offset + 1] *= 0.999;
            if (Math.abs(points[offset]) > 25) velocities[offset] *= -1;
            if (Math.abs(points[offset + 1]) > 16) velocities[offset + 1] *= -1;
          }

          for (let other = index + 1; other < count; other += 1) {
            const otherOffset = other * 3;
            const x = points[offset] - points[otherOffset];
            const y = points[offset + 1] - points[otherOffset + 1];
            const z = points[offset + 2] - points[otherOffset + 2];
            if (x * x + y * y + z * z >= reachSquared) continue;
            linePositions[vertexCount] = points[offset];
            linePositions[vertexCount + 1] = points[offset + 1];
            linePositions[vertexCount + 2] = points[offset + 2];
            linePositions[vertexCount + 3] = points[otherOffset];
            linePositions[vertexCount + 4] = points[otherOffset + 1];
            linePositions[vertexCount + 5] = points[otherOffset + 2];
            vertexCount += 6;
          }
        }

        pointAttribute.needsUpdate = true;
        lineGeometry.setDrawRange(0, vertexCount / 3);
        lineAttribute.needsUpdate = true;
        renderer.render(scene, camera);
      };

      let animationId = 0;
      let lastFrame = 0;
      const frameInterval = mobileQuery.matches ? 1000 / 20 : 1000 / 30;
      const animate = (timestamp) => {
        if (document.hidden) return;
        animationId = window.requestAnimationFrame(animate);
        if (timestamp - lastFrame < frameInterval) return;
        lastFrame = timestamp;
        renderFrame();
      };

      const onVisibilityChange = () => {
        window.cancelAnimationFrame(animationId);
        if (!document.hidden && !reducedMotion) animationId = window.requestAnimationFrame(animate);
      };

      renderFrame();
      if (!reducedMotion && !document.hidden) animationId = window.requestAnimationFrame(animate);
      document.addEventListener('visibilitychange', onVisibilityChange);

      cleanup = () => {
        window.cancelAnimationFrame(animationId);
        document.removeEventListener('visibilitychange', onVisibilityChange);
        window.removeEventListener('resize', resize);
        window.removeEventListener('pointermove', onPointerMove);
        pointGeometry.dispose();
        lineGeometry.dispose();
        nodes.material.dispose();
        links.material.dispose();
        renderer.dispose();
      };
    };

    initialize();
    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return <canvas ref={canvasRef} className="network-field" aria-hidden="true" />;
}