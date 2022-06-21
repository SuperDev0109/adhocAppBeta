import React, { Fragment } from 'react';
import { ProductBreadcrumbs, ProductBrand, ProductReview, ProductCategory } from '../sections/product';

export default function Product() {
    return (
        <Fragment>
            <div className='container'>

                <ProductBreadcrumbs />

                <ProductBrand />

                <ProductReview />

                <ProductCategory />

            </div>
        </Fragment>
    )
}