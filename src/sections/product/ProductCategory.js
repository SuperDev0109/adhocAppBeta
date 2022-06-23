import React from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ProductCategory.scss';

import Slider from 'react-slick';

import ProductCategoryItem from '../../components/ProductCategoryItem';
import BucketsBox from '../../components/BucketsBox';
import ShowMoreBtn from '../../components/ShowMoreBtn';
import { Fragment } from 'react';

export default function ProductCategory() {

    const settings_category = {
        // dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        // arrows: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
                breakpoint: 993,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
      };

      const settings_bucket = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // arrows: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
                breakpoint: 993,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                }
            },
          ]
      };

return (
    <Fragment>
        
        <div className='productCategorySection'>
            <Slider {...settings_category}>
                <ProductCategoryItem />
                <ProductCategoryItem />
                <ProductCategoryItem />
                <ProductCategoryItem />
                <ProductCategoryItem />
                <ProductCategoryItem />
                <ProductCategoryItem />
                <ProductCategoryItem />
            </Slider>
        </div>

        <div className='productBucketBoxSectionTitle'>Buckets</div>
        <div className='productBucketBoxSection'>
            <Slider {...settings_bucket}>
                <BucketsBox imgSrc="images/product/bucket.png" width="130px" height="130px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
                <BucketsBox imgSrc="images/product/bucket.png" width="130px" height="130px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
                <BucketsBox imgSrc="images/product/bucket.png" width="130px" height="130px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
                <BucketsBox imgSrc="images/product/bucket.png" width="130px" height="130px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
            </Slider>
        </div>
        <center><ShowMoreBtn title="Show more" /></center>

        <div className='productBucketBoxSectionTitle'>Boxes</div>
        <div className='productBucketBoxSection'>
            <Slider {...settings_bucket}>
                <BucketsBox imgSrc="images/product/boxes.png" width="130px" height="130px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
                <BucketsBox imgSrc="images/product/boxes.png" width="130px" height="130px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
                <BucketsBox imgSrc="images/product/boxes.png" width="130px" height="130px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
                <BucketsBox imgSrc="images/product/boxes.png" width="130px" height="130px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
            </Slider>
        </div>
        <center><ShowMoreBtn title="Show more" /></center>

        <div className='productBucketBoxSectionTitle'>Menu</div>
        <div className='productBucketBoxSection'>
            <Slider {...settings_bucket}>
                <BucketsBox imgSrc="images/product/menu.png" width="130px" height="130px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
                <BucketsBox imgSrc="images/product/menu.png" width="130px" height="130px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
                <BucketsBox imgSrc="images/product/menu.png" width="130px" height="130px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
                <BucketsBox imgSrc="images/product/menu.png" width="130px" height="130px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
            </Slider>
        </div>
        <center><ShowMoreBtn title="Show more" /></center>

        <div className='productBucketBoxSectionTitle'>Wraps</div>
        <div className='productBucketBoxSection'>
            <Slider {...settings_bucket}>
                <BucketsBox imgSrc="images/product/wrap.png" width="130px" height="130px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
                <BucketsBox imgSrc="images/product/wrap.png" width="130px" height="130px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
                <BucketsBox imgSrc="images/product/wrap.png" width="130px" height="130px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
                <BucketsBox imgSrc="images/product/wrap.png" width="130px" height="130px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
            </Slider>
        </div>
        <center><ShowMoreBtn title="Show more" /></center>

        <div className='productBucketBoxSectionTitle'>Burgers</div>
        <div className='productBucketBoxSection'>
            <Slider {...settings_bucket}>
                <BucketsBox imgSrc="images/product/burger.png" width="130px" height="130px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
                <BucketsBox imgSrc="images/product/burger.png" width="130px" height="130px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
                <BucketsBox imgSrc="images/product/burger.png" width="130px" height="130px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
                <BucketsBox imgSrc="images/product/burger.png" width="130px" height="130px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
            </Slider>
        </div>
        <center><ShowMoreBtn title="Show more" /></center>

        <div className='productBucketBoxSectionTitle'>Chicken pieces</div>
        <div className='productBucketBoxSection'>
            <Slider {...settings_bucket}>
                <BucketsBox imgSrc="images/product/chicken.png" width="160px" height="100px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
                <BucketsBox imgSrc="images/product/chicken.png" width="160px" height="100px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
                <BucketsBox imgSrc="images/product/chicken.png" width="160px" height="100px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
                <BucketsBox imgSrc="images/product/chicken.png" width="160px" height="100px" title1="American Bucket" title2="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." title3="62,00" title4="RON" />
            </Slider>
        </div>
        <center><ShowMoreBtn title="Show more" /></center>

    </Fragment>
    )
}