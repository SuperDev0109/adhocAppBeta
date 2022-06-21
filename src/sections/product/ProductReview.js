import React, { Fragment } from 'react';
import Image from '../../components/Image';
import './ProductReview.scss'

export default function ProductReview() {
    return (
        <Fragment>

            <div className='productReviewSection col-md-10 productReviewSectionDesktop'>
                <div className='panel1'>
                    <span className='title1'>4.9</span>
                    <Image src="images/icons/star.png" alt="starIcon" width="20px" height="20px" />
                    <span className='title2'>(154) reviews</span>
                </div>
                <div className='panel2'>
                    <Image src="images/icons/check.png" alt="checkIcon" width="17px" height="11.5px" />
                    <span className='title1'>Online payment</span>
                </div>
                <div className='panel3'>
                    <Image src="images/icons/visa.png" alt="visaIcon" width="42px" height="14px" />
                    <Image src="images/icons/mastercard.png" alt="mastercardIcon" width="31px" height="19px" />
                    <Image src="images/icons/paypal.png" alt="paypalIcon" width="68px" height="18px" />
                </div>
            </div>

            <div className='productReviewSection productReviewSectionMobile hidden'>
                <div className='productReviewSectionMobilePanel1'>
                    <div className='panel1 panel1Mobile'>
                        <div className='panel1MobileFirst'>
                            <span className='title1'>4.9</span>
                            <Image src="images/icons/star.png" alt="starIcon" width="20px" height="20px" />
                        </div>
                        <span className='title2'><center>(154) reviews</center></span>
                    </div>
                    <Image src="images/product/kfc.png" className="kftImg" alt="KFC Image" width="121px" height="121px" />
                    <div className='panel2 panel2Mobile'>
                        <Image src="images/icons/check.png" alt="checkIcon" width="17px" height="11.5px" />
                        <span className='title1'><center>Online payment</center></span>
                    </div>
                </div>

                <div className='panel3'>
                    <Image src="images/icons/visa.png" alt="visaIcon" width="56px" height="18px" />
                    <Image src="images/icons/mastercard.png" alt="mastercardIcon" width="40px" height="25px" />
                    <Image src="images/icons/paypal.png" alt="paypalIcon" width="84px" height="22px" />
                </div>
            </div>
        </Fragment>
    )
}