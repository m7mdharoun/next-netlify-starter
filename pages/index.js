import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Haron app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
res.send('<script>window.location.href="https://pastes.io";</script>');

      <Footer />
    </div>
  )
}
