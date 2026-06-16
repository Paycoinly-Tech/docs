import cobe, { Globe } from "cobe";
import { useColorMode } from "@docusaurus/theme-common";
import { useEffect, useRef } from "react";

const Earth = () => {
  const { colorMode } = useColorMode();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<Globe>(null);

  useEffect(() => {
    return () => globeRef.current?.destroy();
  }, []);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const dark = colorMode === "dark" ? 1 : 0;
    const glowColor: [number, number, number] =
      colorMode === "dark" ? [0.6, 0.6, 0.6] : [1, 1, 1];

    if (globeRef.current) {
      globeRef.current.update({ dark, glowColor });
    } else {
      let phi = 0;

      globeRef.current = cobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 2400,
        height: 2400,
        phi: 0,
        theta: 0.15,
        dark,
        scale: 1,
        diffuse: 1.2,
        offset: [0, 200],
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.8, 0.8, 0.8],
        markerColor: [1, 1, 1],
        glowColor,
        markers: [],
      });

      // function animate() {
      //   phi += 0.005;
      //   globeRef.current?.update({ phi });
      //   requestAnimationFrame(animate);
      // }

      // animate();
    }
  }, [colorMode]);

  return (
    <div className="globe">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Earth;
