import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import '../assets/styles/globals.scss'
import '../assets/styles/tailwind.scss'

function MyApp({ Component, pageProps }) {
  
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
