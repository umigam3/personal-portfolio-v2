"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

function isWebGLSupported() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

export default function Cobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !isWebGLSupported()) return;

    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: window.devicePixelRatio || 1,
      width: canvasRef.current.offsetWidth,
      height: canvasRef.current.offsetHeight,
      phi: 0,
      theta: 0.5,
      dark: 1,
      diffuse: 1.5,
      mapSamples: 6000,
      mapBrightness: 3,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.647, 0.529, 0.902],
      glowColor: [0.2, 0.2, 0.2],
      markers: [{ location: [41.3874, 2.1686], size: 0.1 }],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.0025;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute -bottom-36 right-0 -z-10 opacity-50 w-[600px] h-[600px] max-w-full aspect-square"
    />
  );
}
