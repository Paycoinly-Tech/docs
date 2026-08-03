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
                  "https://app.paycoinly.xyz/pay?token=VLJ83c98qON5Fp0lKihfS4dhG65LdyrMr0DKKtgl9iFaiQ77Aa8Vx7sqON3J0fD78Qdevk6pjTt5I0shuWK2474N+FvTE4YiT4JUzbxUeBv/V+lCua3DJBQgu5NU2AwO+7v68Gzc51j0sJ1p8fHzEQ==",
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
                  "https://app.paycoinly.xyz/pay?token=3xpNPfcXdLkSIFUzti6e8+JnXWqfw+Ek5CLQjbplnjs2YGrJFwzkvSj6nHheyz6jKoxbiXNze6U+/eQ6oMVOBFCGZ4klkB80CjVOO7Wo3gTZnk6J0kxT6V05eV6BnkvQ3wafK322stLNegXmqKGnLw==",
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
                  "https://app.paycoinly.xyz/pay?token=wxt2sznx79lTOhY4n2aDBk15TVpOao+s1PJuCQtCf+zhb2CzIs+HSUxbi8gKhxYbDzi87zxvBRqYAgcTgaDziaHIoUdjhvHDavDCWze22n7Rei1xySNMYZTTbfvTzA750JdHLEwN5P3bhQuvLVkulw==",
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
      <title>Paycoinly - Crypto Payment Gateway</title>
    </Head>
    <Layout description="PayCoinly is the crypto payment gateway for businesses. Accept crypto payments easily and securely.">
      <Main />
    </Layout>
  </>
);

export default Page;
