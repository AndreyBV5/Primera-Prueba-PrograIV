import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'


const Home: NextPage = () =>{
  return (
    <div>
       <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Hero/>
      <About/>



    </div>
  )

}

export default Home
