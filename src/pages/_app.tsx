import type { AppProps } from 'next/app'
import { globalStyles } from '../stitches/global'
import { Container, Header } from '../stitches/pages/app'
import Image from 'next/image'
import Logo from '../assets/logo.svg'

globalStyles()



export default function App({ Component, pageProps }: AppProps) {
  return (<Container>
    <Header>
      <Image src={Logo} alt="" />
    </Header>
    <Component {...pageProps} />
  </Container>)
}
