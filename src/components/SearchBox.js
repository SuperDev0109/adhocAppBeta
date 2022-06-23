import PropTypes from 'prop-types';
import './SearchBox.scss';

SearchBox.propTypes = {
    placeHolder: PropTypes.string,
    className: PropTypes.string
}

export default function SearchBox({ placeHolder, className }) {
    return (
        <div className='searchBox'>
            <img src="images/icons/searchIcon.png" width="25px" height="28px" />
            <input type="text" placeholder={placeHolder} className={className} />
        </div>
    )
}