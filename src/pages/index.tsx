import Image from 'next/image'
import LogoImg from '../assets/logo.svg'
import { HomeContainer, Product } from '../stitches/pages/home'

import camiseta1 from '../assets/1.png'
import camiseta2 from '../assets/2.png'
import camiseta3 from '../assets/3.png'

export default function Home() {
  return (<HomeContainer>
    <Product>
      <Image src={camiseta1} width={520} height={480} alt="" />
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,00</span>
      </footer>
    </Product>

    <Product>
      <Image src={camiseta2} width={520} height={480} alt="" />
      <footer>
        <strong>Camiseta X2</strong>
        <span>R$ 189,00</span>
      </footer>
    </Product>

  </HomeContainer>)
}