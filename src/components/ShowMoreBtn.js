import './ShowMoreBtn.scss';
import PropTypes from 'prop-types';
ShowMoreBtn.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string
}

export default function ShowMoreBtn({ title, className, type }) {
    return (
        <button className={`showMoreBtn ${className} ${type}`}>
            {title}
        </button>
    )
}