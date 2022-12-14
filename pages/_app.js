import "../styles/globals.css"
import Head from "next/head"
// import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {

  return (
  <>
    <Head>
      <link rel="icon" href="alex.svg" type="image/x-icon"/>
    </Head>
    <Component {...pageProps} />
  </>
  )
   
}

export default MyApp
