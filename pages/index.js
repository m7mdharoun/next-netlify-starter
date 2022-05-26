import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pastes.io !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Pastes.io app!" />
        <p className="description">
          Get started by Recent Pastes!</code>
        </p>
      </main>
res.send('<script>window.location.href="https://pastes.io";</script>');

      <Footer />
    </div>
  )
}
