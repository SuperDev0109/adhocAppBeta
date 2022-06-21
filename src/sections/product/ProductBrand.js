import React, { Fragment } from 'react';
import './ProductBrand.scss';
import BackBtn from '../../components/BackBtn';
import Image from '../../components/Image';
import SearchBox from '../../components/SearchBox';

export default function ProductBrand() {
    return (
        <Fragment>
            <div className='productBrandSection'>
                <BackBtn text='Back' className='backBtnType1' />

                <div className='mainPanel desktopBrand'>
                    <Image src="images/product/kfc.png" className="" alt="KFC Image" width="121px" height="121px" />
                    <span className='title1'>KFC</span>
                    <span className='title2'>From 11:00 - 17:00</span>
                    <div className='col-md-6'>
                        <SearchBox placeHolder="Search in Menu" className="w-full" />
                    </div>
                </div>

                <div className='mainPanel mobileBrand hidden'>
                    <span className='title1'>KFC</span>
                    <span className='title2'>From 11:00 - 17:00</span>
                </div>
            </div>
        </Fragment>
    )
}