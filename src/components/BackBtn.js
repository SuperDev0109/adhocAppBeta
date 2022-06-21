import PropTypes from 'prop-types';
import './BackBtn.scss';

BackBtn.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
}

export default function BackBtn({ text, className }) {
    return (
        <button className={`backBtn ${className}`}>
            <span className='title'> 
                <img src='images/product/leftArrow.png' />
                {text}
            </span>
        </button>
    )
}