import './index.scss';
import Image from '../../components/Image';
import SearchBox from '../../components/SearchBox';
import ShowMoreBtn from '../../components/ShowMoreBtn';
import AddressBtn from '../../components/AddressBtn';
import HeartIcon from '../../components/HeartIcon';
import CartIcon from '../../components/CartIcon';
import UserIcon from '../../components/UserIcon';

export default function Index() {
    return (
        <div className='headerSection'>
            <Image src="images/logo.png" width="164px" height="40px" />
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
                <HeartIcon />
                <CartIcon />
                <UserIcon />
            </div>
        </div>
    )
}