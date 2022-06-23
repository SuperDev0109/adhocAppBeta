import './index.scss';
import Image from '../../components/Image';
import SearchBox from '../../components/SearchBox';
import ShowMoreBtn from '../../components/ShowMoreBtn';
import AddressBtn from '../../components/AddressBtn';

export default function Index() {
    return (
        <div className='headerSection'>
            <Image src="images/logo.png" width="200px" height="50px" />
            <div className='searchBox'>
                <SearchBox placeHolder="Search for restaurant" />
                <div className='btn-group'>
                    <AddressBtn />
                    <div className="dropdown-menu customDropDownAddress">
                        <ShowMoreBtn title="Your address" className="btnSmall w-full showMoreBtnType1" />
                        <div className='box'>
                            <Image src="images/icons/next.png" width="36px" height="36px" />
                            <span>Add a new address</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='iconBox'>
                <div className="btn-group">
                    <label className='hover' data-toggle="dropdown"><Image src="images/icons/heart.png" width="35px" height="30px"/></label>
                    <div className="dropdown-menu dropdown-menu-right customDropDownHeart">
                        <span>Add your favourite food, restaurants or another</span>
                    </div>
                </div>
                <div className="btn-group">
                    <label className='hover' data-toggle="dropdown"><Image src="images/icons/cart.png" width="35px" height="30px"/></label>
                    <div className="dropdown-menu dropdown-menu-right customDropDownCart">
                        <p>You have no items in your shopping cart</p>
                        <ShowMoreBtn title="Go to cart" className="btnSmall w-full" />
                    </div>
                </div>
                <div className="btn-group">
                    <label className='hover' data-toggle="dropdown"><Image src="images/icons/user.png" width="35px" height="30px"/></label>
                    <div className="dropdown-menu dropdown-menu-right customDropDownUser">
                        <p>Log in to your Adhoc account and have full access to the entire shopping list</p>
                        <div className='box'>
                            <ShowMoreBtn title="Log in" className="btnSmall" />
                            <ShowMoreBtn title="New account" className="btnSmall" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}