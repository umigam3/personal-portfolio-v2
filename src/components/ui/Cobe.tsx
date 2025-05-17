"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Cobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 1,
      width: 600,
      height: 600,
      phi: 0,
      theta: 0.5,
      dark: 1,
      diffuse: 1.5,
      mapSamples: 8000,
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
      className="absolute -bottom-36 right-0 -z-10 opacity-50"
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
    />
  );
}
