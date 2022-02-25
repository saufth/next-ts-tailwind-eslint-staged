import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="[Fernando  Torres](https://github.com/saufth)" />
        <meta name="description" content="Next configuration with Typescript, Tailwind and ESLint" />
        <meta name="keywords" content="keyword list"></meta>
        <title>Next configuration with Typescript, Tailwind and ESLint</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Hello cosmos!</p>
    </div>
  )
}

export default Home
