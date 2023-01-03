import Image from 'next/image'
import { HomeContainer, Product } from '../stitches/pages/home'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { stripe } from '../lib/stripe'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'
import Link from 'next/link'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]

}


export default function Home({ products }: HomeProps) {
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
    {
      products.map(product => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
          >
            <Product
              
              className="keen-slider__slide"
            >
              <Image src={product.imageUrl} width={520} height={480} alt="" />
              <footer>
                <strong>{product.name}</strong>
                <span>R$ {product.price}</span>
              </footer>
            </Product>
          </Link>
        )
      })
    }

  </HomeContainer>)
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(item => {
    const price = item.default_price as Stripe.Price

    return {
      id: item.id,
      name: item.name,
      imageUrl: item.images[0],
      url: item.url,
      price: price && price.unit_amount ? new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100) : 0
    }
  })

  return {
    props: {
      products: products
    },
    revalidate: 60 * 60 * 2 // 2 horas
  }
}

