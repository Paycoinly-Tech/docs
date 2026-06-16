import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import cobe from "cobe";

const createGlobe = (ref: HTMLCanvasElement) => {
  let phi = 0;

  const globe = cobe(ref, {
    devicePixelRatio: 2,
    width: 2400, // Rendered internally at 2400x2400 for crisp edges on scaling
    height: 2400,
    phi: 0,
    theta: 0.15,
    dark: 1,
    diffuse: 1.2,
    offset: [0, 0],
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [0.15, 0.15, 0.15],
    markerColor: [1, 1, 1],
    glowColor: [0.3, 0.3, 0.3],
    markers: [],
  });

  function animate() {
    phi += 0.005; // Adjust speed as needed
    globe.update({ phi });
    requestAnimationFrame(animate);
  }

  animate();
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <canvas ref={createGlobe} className="globe" />
        <Heading as="h1">Hello</Heading>
      </main>
    </Layout>
  );
}
