import './ProductCategory.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import ProductCategoryItem from '../../components/ProductCategoryItem';
import BucketsBox from '../../components/BucketsBox';
import ShowMoreBtn from '../../components/ShowMoreBtn';
import { Fragment } from 'react';

export default function ProductCategory() {

return (
    <Fragment>
        <div className='productCategorySection'>
            {/* <div className='row'> */}
                    <ProductCategoryItem />
                    <ProductCategoryItem />
                    <ProductCategoryItem />
                    <ProductCategoryItem />
                    <ProductCategoryItem />
            {/* </div> */}
        </div>

        <div className='productBucketBoxSectionTitle'>Buckets</div>
        <div className='productBucketBoxSection'>
            <BucketsBox imgSrc="images/product/bucket.png" width="160px" height="160px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
            <BucketsBox imgSrc="images/product/bucket.png" width="160px" height="160px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
            <BucketsBox imgSrc="images/product/bucket.png" width="160px" height="160px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
        </div>
        <center><ShowMoreBtn /></center>

        <div className='productBucketBoxSectionTitle'>Boxes</div>
        <div className='productBucketBoxSection'>
            <BucketsBox imgSrc="images/product/boxes.png" width="160px" height="160px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
            <BucketsBox imgSrc="images/product/boxes.png" width="160px" height="160px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
            <BucketsBox imgSrc="images/product/boxes.png" width="160px" height="160px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
        </div>
        <center><ShowMoreBtn /></center>

        <div className='productBucketBoxSectionTitle'>Menu</div>
        <div className='productBucketBoxSection'>
            <BucketsBox imgSrc="images/product/menu.png" width="160px" height="160px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
            <BucketsBox imgSrc="images/product/menu.png" width="160px" height="160px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
            <BucketsBox imgSrc="images/product/menu.png" width="160px" height="160px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
        </div>
        <center><ShowMoreBtn /></center>

        <div className='productBucketBoxSectionTitle'>Wraps</div>
        <div className='productBucketBoxSection'>
            <BucketsBox imgSrc="images/product/wrap.png" width="160px" height="160px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
            <BucketsBox imgSrc="images/product/wrap.png" width="160px" height="160px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
            <BucketsBox imgSrc="images/product/wrap.png" width="160px" height="160px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
        </div>
        <center><ShowMoreBtn /></center>

        <div className='productBucketBoxSectionTitle'>Burgers</div>
        <div className='productBucketBoxSection'>
            <BucketsBox imgSrc="images/product/burger.png" width="160px" height="160px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
            <BucketsBox imgSrc="images/product/burger.png" width="160px" height="160px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
            <BucketsBox imgSrc="images/product/burger.png" width="160px" height="160px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
        </div>
        <center><ShowMoreBtn /></center>

        <div className='productBucketBoxSectionTitle'>Chicken pieces</div>
        <div className='productBucketBoxSection'>
            <BucketsBox imgSrc="images/product/chicken.png" width="160px" height="100px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
            <BucketsBox imgSrc="images/product/chicken.png" width="160px" height="100px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
            <BucketsBox imgSrc="images/product/chicken.png" width="160px" height="100px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
        </div>
        <center><ShowMoreBtn /></center>

    </Fragment>
    )
}