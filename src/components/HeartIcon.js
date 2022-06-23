import './HeartIcon.scss';
import Image from './Image';

export default function HeartIcon() {
    return (
        <div className='heartIconComponent'>
            <div className="btn-group">
                <label className='hover' data-toggle="dropdown"><Image src="images/icons/heart.png" width="35px" height="30px"/></label>
                <div className="dropdown-menu dropdown-menu-right customDropDownHeart">
                    <span>Add your favourite food, restaurants or another</span>
                </div>
            </div>
        </div>
    )
}