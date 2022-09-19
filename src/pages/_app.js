import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import '../assets/styles/tailwind.scss'
import '../assets/styles/globals.scss'

function MyApp({ Component, pageProps }) {
  
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
