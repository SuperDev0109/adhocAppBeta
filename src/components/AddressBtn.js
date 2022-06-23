import './AddressBtn.scss';
import Image from './Image';

export default function AddressBtn() {
    return (
        <div className='addressBtnComponent' data-toggle="dropdown">
            <Image src="images/icons/address.png" className="addressImg" width="18px" height="28px" />
            <button>Add your address</button>
            <Image src="images/icons/arrowBottom.png" className="arrowImg" width="15px" height="7px" />
        </div>
    )
}