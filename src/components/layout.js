import Head from 'next/head'
import Footer from './footer'
import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className="bg-black">
        <div className="container mx-auto flex flex-col gap-4 p-6 text-white">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
