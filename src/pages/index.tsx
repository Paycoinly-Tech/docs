import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useColorMode } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import cobe, { Globe } from "cobe";
import Head from "@docusaurus/Head";
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

      function animate() {
        phi += 0.005;
        globeRef.current?.update({ phi });
        requestAnimationFrame(animate);
      }

      animate();
    }
  }, [colorMode]);

  return (
    <div className="globe">
      <canvas ref={canvasRef} />
    </div>
  );
};

const Page = () => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://www.paycoinly.xyz/" />
      <meta
        name="description"
        content="PayCoinly is the crypto payment gateway for businesses. Accept crypto payments, settle instantly in tokens, stablecoins, memecoins and real world assets. Easy integration with low fees - just 1%."
      />
      <meta
        name="keywords"
        content="crypto payment gateway, accept crypto, stablecoins, memecoins, real world assets, blockchain payments, PayCoinly"
      />
      <meta name="robots" content="index, follow" />
      <meta
        property="og:title"
        content="PayCoinly | Accept Crypto Payments Instantly"
      />
      <meta
        property="og:description"
        content="PayCoinly is the crypto payment gateway for businesses. Accept crypto payments easily and securely."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.paycoinly.xyz/" />
      <meta
        property="og:image"
        content="https://app.paycoinly.xyz/logo/dark.svg"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="PayCoinly | Accept Crypto Payments Instantly"
      />
      <meta
        name="twitter:description"
        content="PayCoinly is the crypto payment gateway for businesses. Accept crypto payments easily and securely."
      />
      <meta
        name="twitter:image"
        content="https://app.paycoinly.xyz/logo/dark.svg"
      />
    </Head>
    <Layout
      title="Paycoinly"
      description="PayCoinly is the crypto payment gateway for businesses. Accept crypto payments easily and securely."
    >
      <main>
        <Earth />
        <Heading as="h1">Paycoinly</Heading>
      </main>
    </Layout>
  </>
);

export default Page;
