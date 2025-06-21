import React, { useEffect } from 'react'
import { ProductDetails } from '../components/product/ProductDetails'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {
  const { id } = useParams()
  return (
    <div><ProductDetails id={id}/></div>
  )
}

export default ProductDetailsPage;