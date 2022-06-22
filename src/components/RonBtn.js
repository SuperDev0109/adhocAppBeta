import './RonBtn.scss';
import PropTypes from 'prop-types';
RonBtn.propTypes = {
    price: PropTypes.string,
    currency: PropTypes.string,
    className: PropTypes.string
}

export default function RonBtn({ price, currency, className }) {
    return (
        <div className='ronBtnComponent'>
            <button className={`${className}`}>
                <span className='title1'>{price}</span>
                <span className='title2'>{currency}</span>
            </button>
        </div>
    )
}