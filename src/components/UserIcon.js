import './UserIcon.scss';
import Image from './Image';
import ShowMoreBtn from './ShowMoreBtn';

export default function UserIcon() {
    return (
        <div className='userIconComponent'>
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
    )
}