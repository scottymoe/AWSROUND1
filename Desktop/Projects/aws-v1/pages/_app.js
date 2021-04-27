import '../styles/globals.css'
import '../configureAmplify'
import Link from 'next/link'
import styled from "styled-components"

function MyApp({ Component, pageProps }) {
  return (
    <div className = "w-screen">
      <nav className = "p-6 border-b border-grey-300 flex space-x-10">
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href='/create-case'>
          <span>Create Case</span>
        </Link>
        <Link href='/profile'>
          <span>Profile</span>
        </Link>
      </nav>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp

const BigNav = styled.div `
  justify-content: space-between;
`
