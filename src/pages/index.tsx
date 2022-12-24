import Image from 'next/image'
import LogoImg from '../assets/logo.svg'
import { HomeContainer, Product } from '../stitches/pages/home'

import camiseta1 from '../assets/1.png'
import camiseta2 from '../assets/2.png'
import camiseta3 from '../assets/3.png'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'


export default function Home() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 3,
        spacing: 48
      },
      slideChanged() {
        console.log('slide changed')
      },
    },
    [
      // add plugins here
    ]
  )


  return (<HomeContainer ref={sliderRef} className="keen-slider">
    <Product className="keen-slider__slide">
      <Image src={camiseta1} width={520} height={480} alt="" />
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,00</span>
      </footer>
    </Product>

    <Product className="keen-slider__slide">
      <Image src={camiseta2} width={520} height={480} alt="" />
      <footer>
        <strong>Camiseta X2</strong>
        <span>R$ 189,00</span>
      </footer>
    </Product>
    <Product className="keen-slider__slide">
      <Image src={camiseta3} width={520} height={480} alt="" />
      <footer>
        <strong>Camiseta X2</strong>
        <span>R$ 189,00</span>
      </footer>
    </Product>

  </HomeContainer>)
}
