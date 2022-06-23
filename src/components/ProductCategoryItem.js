import React, { useState } from 'react';
import './ProductCategoryItem.scss';
import Image from './Image';
import { Modal } from 'react-bootstrap';
import BackBtn from './BackBtn';
import SpecialMention from '../sections/order/SpecialMention';
import ShowMoreBtn from './ShowMoreBtn';

export default function ProductCategoryItem() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div className='productCategoryItemComponent'>
            <Image src="images/product/item1.png" alt="product image kfc" width="190px" height="190px" className="border-20" />
            <span className='title hover' onClick={handleShow}>Buckets</span>

            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                keyboard={false}
            >
                <Modal.Body>
                    <div className='modalBucket'>
                        <BackBtn text="Back" className='backBtnType1 backLeft maxContent' />
                        <center><Image src="images/product/bucketBig.png" className="bucketImage" width="80%" /></center>
                        <div className='americanSection'>
                            <span className='title1'>American Bucket</span>
                            <span className='title2'>62,00 <span className='title3'>RON</span> </span>
                            <span className='title4'>Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x...</span>
                            <span className='title5'>Package: 350/400 g</span>
                        </div>
                        <div className='selectOptionSection'>
                            <div className='borderWidth'></div>
                            <span className='title1'>Select an option</span>
                            <div className='boxParent'>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" />
                                        <div className='radioTxtBox'>
                                            <span className='radioTxt1'>Hot Wings</span>
                                            <span className='radioTxt2'>You may 11 Crispy strips</span>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>0,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='borderWidth'></div>
                        </div>
                        <div className='selectOptionSection'>
                            <span className='title1'>Select an option</span>
                            <div className='boxParent'>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" />
                                        <div className='radioTxtBox'>
                                            <span className='radioTxt1'>Crispy Strips</span>
                                            <span className='radioTxt2'>You may 3 Crispy strips</span>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>0,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                            </div>
                            <div className='borderWidth'></div>
                        </div>

                        {/* potato */}
                        <div className='selectOptionSection nogap'>
                            <span className='title1'>Add the potatoes</span>
                            <span className='potatoTxt'>Select between 0 and 3 options</span>
                            <div className='boxParent'>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" />
                                        <div className='radioTxtBox'>
                                            <span className='radioTxt1'>Small Potatoes</span>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>5,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" />
                                        <div className='radioTxtBox'>
                                            <span className='radioTxt1'>Medium Potatoes</span>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>7,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" />
                                        <div className='radioTxtBox'>
                                            <span className='radioTxt1'>Large Potatoes</span>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>8,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className='borderWidth marginTop20'></div>
                        </div>

                        {/* drink */}
                        <div className='selectOptionSection nogap'>
                            <span className='title1'>Add the drink</span>
                            <span className='potatoTxt'>Select between 0 and 3 options</span>
                            <div className='boxParent'>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" />
                                        <div className='radioTxtBox'>
                                            <span className='radioTxt1'>Coca Cola Zero glass 0.5 L</span>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>5,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" />
                                        <div className='radioTxtBox'>
                                            <span className='radioTxt1'>Coca Cola Zero glass 0.5 L</span>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>7,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" />
                                        <div className='radioTxtBox'>
                                            <span className='radioTxt1'>Coca Cola Zero glass 0.5 L</span>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>8,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" />
                                        <div className='radioTxtBox'>
                                            <span className='radioTxt1'>Coca Cola Zero glass 0.5 L</span>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>9,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                            </div>
                            <div className='borderWidth marginTop20'></div>
                        </div>
                        {/* sause */}
                        <div className='selectOptionSection nogap'>
                            <span className='title1'>Add extra sause</span>
                            <span className='potatoTxt'>Select between 0 and 3 options</span>
                            <div className='boxParent'>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" />
                                        <div className='radioTxtBox'>
                                            <span className='radioTxt1'>Ketchup sause</span>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>10,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" />
                                        <div className='radioTxtBox'>
                                            <span className='radioTxt1'>Garlic sause</span>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>7,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" />
                                        <div className='radioTxtBox'>
                                            <span className='radioTxt1'>Ketchup sause</span>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>8,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" />
                                        <div className='radioTxtBox'>
                                            <span className='radioTxt1'>Garlic sause</span>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>9,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                            </div>
                            <div className='borderWidth marginTop20'></div>
                        </div>
                        {/* add dessert */}
                        <div className='selectOptionSection nogap'>
                            <span className='title1'>Add dessert</span>
                            <span className='potatoTxt'>Select between 0 and 3 options</span>
                            <div className='boxParent'>
                                <div className='box'>
                                    <div className='panel1'>
                                        <input type="radio" />
                                        <div className='radioTxtBox'>
                                            <span className='radioTxt1'>Carrot Cake</span>
                                        </div>
                                    </div>
                                    <div className='panel2'>
                                        <span className='title1'>9,00</span>
                                        <span className='title2'>RON</span>
                                    </div>
                                </div>
                            </div>
                            <div className='borderWidth marginTop20'></div>
                        </div>

                        <div className='comment'>
                            <SpecialMention />
                        </div>

                        <div className='countBox'>
                            <Image src="images/icons/prev.png" />
                            <span>1</span>
                            <Image src="images/icons/next.png" />
                        </div>

                        <div className='showMoreSection'>
                            <ShowMoreBtn title="ADD TO BASKET 62,00 RON" type="showMoreBtnType1" className="w-full" />
                        </div>


                    </div>

                </Modal.Body>
            </Modal>

        </div>
    )
}