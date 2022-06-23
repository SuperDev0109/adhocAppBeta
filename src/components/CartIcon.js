import './CartIcon.scss';
import Image from './Image';
import ShowMoreBtn from './ShowMoreBtn';

export default function CartIcon() {
    return (
        <div className='cartIconComponent'>
            <div className="btn-group">
                <label className='hover' data-toggle="dropdown"><Image src="images/icons/cart.png" width="35px" height="30px"/></label>
                <div className="dropdown-menu dropdown-menu-right customDropDownCart">
                    <p>You have no items in your shopping cart</p>
                    <ShowMoreBtn title="Go to cart" className="btnSmall w-full" />
                </div>
            </div>
        </div>
    )
}