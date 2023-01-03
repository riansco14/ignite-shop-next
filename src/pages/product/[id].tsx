import React from 'react'
import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from '../../stitches/pages/product'

export default function Product() {
    const { query } = useRouter()

    return (<ProductContainer>
        <ImageContainer>
        </ImageContainer>

        <ProductDetails>
            <h1>Camiseta X</h1>
            <span>R$ 79,90</span>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus porro illum qui dolore illo voluptatibus sapiente autem nam odio beatae error nemo libero repudiandae, fuga deserunt. Eum beatae aperiam quis?</p>
            <button>Comprar Agora</button>
        </ProductDetails>

    </ProductContainer>)
}