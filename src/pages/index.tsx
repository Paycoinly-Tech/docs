import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import imgDashboard from "../img/dashboard.png";
import "../css/landing-page.scss";

const Main = () => (
  <main className="landing-page">
    <section className="row wide theme-background">
      <div className="col col--6">
        <Heading as="h1" className="title">
          Accept <strong>Crypto</strong>, Any <strong>Business</strong>
        </Heading>
        <p>
          <strong>Paycoinly</strong> is the payment gateway for stablecoins,
          native tokens, tokenized real-world assets, and long-tail crypto -
          with multi-currency pricing and instant settlement.
        </p>
        <div className="button-box">
          <a
            href="https://app.paycoinly.xyz/register"
            className="button button--primary"
          >
            Register
          </a>
          <a href="/docs/intro" className="button button--info">
            Open Documentation
          </a>
        </div>
        <div className="how-works">
          <h3>See how it works</h3>
          <p>☕ Buy me a coffee</p>
          <div className="button-box">
            <button
              className="button button--warning"
              onClick={() =>
                window.open(
                  "https://app.paycoinly.xyz/pay?token=93LxFW57Ud6JrPFlOu48pXWxvJY9kdFYkLg980ZzAyVZVqh2fiYcah89zTOceSl19Bv+PZCToNyPTkqIgjKw/yD7cMFiShiR2LY7497DFNKGvhnqJMrRbxYZW9Zommrb9oOjDR0Sk8raBLjYmNkKng==",
                  "Pay with PayCoinly",
                  "width=800,height=550,left=200,top=100",
                )
              }
            >
              $10
            </button>

            <button
              className="button button--warning"
              onClick={() =>
                window.open(
                  "https://app.paycoinly.xyz/pay?token=EzsxqVGwGY56uCwPY2ywiIyqechkbWLByYz504gIK3RDcgDgWb1uZXkxitIbtmsrvPgZG+KOVcdBojZvb+q4e4eJDkvlK40KK6tQ8Em/UFFpsLb1GmPjlkR8+eD8sj96tacxzEU6pi/VFX/TehD/Zg==",
                  "Pay with PayCoinly",
                  "width=800,height=550,left=200,top=100",
                )
              }
            >
              $50
            </button>

            <button
              className="button button--warning"
              onClick={() =>
                window.open(
                  "https://app.paycoinly.xyz/pay?token=SG6vpBpcvtxryYbzTaaVyYurofbVY7xsehofZXDOeBu3/BsLj5Y2E+mqzBd2MmOFjLFiL9QzPRxaCXWnmFCm3QYo090TdvFd/9iewW+9NyrTMJTjK0KADIb6ObdGMZoF3BUX7bl8m5Sr0bYf43EImA==",
                  "Pay with PayCoinly",
                  "width=800,height=550,left=200,top=100",
                )
              }
            >
              $100
            </button>
          </div>
        </div>
      </div>
      <div className="col col--6 img-container">
        <img className="img-frame" src={imgDashboard} alt="PayCoinly Logo" />
      </div>
    </section>

    <section className="row text--center feature-list">
      <section className="col col--3">
        <Heading as="h3">Beyond Stablecoins</Heading>
        <p>
          Stablecoins are the foundation - but Paycoinly handles the full
          spectrum. Accept native tokens, tokenized gold, synthetic equities,
          and even memecoins.
        </p>
      </section>

      <section className="col col--3">
        <Heading as="h3">Multi Chain Support</Heading>
        <p>
          Paycoinly supports multiple blockchain networks, allowing you to
          accept payments from a wide range of cryptocurrencies and tokens.
        </p>
      </section>

      <section className="col col--3">
        <Heading as="h3"> Easy Integration</Heading>
        <p>
          Set up in minutes with simple APIs and ready-to-use payment buttons
          for your website or app without any crypto knowledge
        </p>
      </section>

      <section className="col col--3">
        <Heading as="h3">Subscription, Checkout, Tipping & Donations</Heading>
        <p>
          Embed a fully branded subscription, checkout, tipping, or donation
          flow - each seamlessly integrated with your product experience.
        </p>
      </section>
      <section className="col col--3">
        <Heading as="h3">Multi Currency Pricing</Heading>
        <p>Price in USD, Show in CAD, Collect in ETH.</p>
      </section>

      <section className="col col--3">
        <Heading as="h3">Simple, Transparent Fees</Heading>
        <p>
          A straightforward 1% transaction fee applied to all payments, with no
          hidden charges or surprise costs - just simple, transparent pricing
          you can trust.
        </p>
      </section>
      <section className="col col--3">
        <Heading as="h3">Analytics Dashboard</Heading>
        <p>
          Track all transactions, monitor revenue growth, and gain insights to
          optimize your business.
        </p>
      </section>
    </section>
    <section className="crypto-ready text--center wide theme-background">
      <Heading as="h3">YOUR BUSINESS, CRYPTO-READY TODAY</Heading>
      <a href="/docs/intro" className="button button--info">
        Open Documentation
      </a>
    </section>
  </main>
);

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
    <Layout description="PayCoinly is the crypto payment gateway for businesses. Accept crypto payments easily and securely.">
      <Main />
    </Layout>
  </>
);

export default Page;
