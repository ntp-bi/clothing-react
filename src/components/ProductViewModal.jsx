import React from 'react'

import ProductView from './ProductView'

import productData from '../assets/fake-data/products'
import Button from './Button'

const product = productData.getProductBySlug('ao-thun-dinosaur-01')

const ProductViewModal = () => {
    return (
        <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
            <div className="product-view__modal__content">
                <ProductView product={product} />
                <div className="product-view__modal__content__close">
                    <Button size="sm">
                        đóng
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductViewModal
