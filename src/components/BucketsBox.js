import PropTypes from 'prop-types';
import './BucketsBox.scss';
import Image from './Image';

BucketsBox.propTypes = {
    imgSrc: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    title1: PropTypes.string,
    title2: PropTypes.string,
    title3: PropTypes.string,
    title4: PropTypes.string
}

export default function BucketsBox({ imgSrc, width, height, title1, title2, title3, title4 }) {
    return (
        <div className='bucketsBoxComponent'>
            <div className='panel1'>
                <span className='title1'>{title1}</span>
                <span className='title2'>{title2} </span>
                <span className='title3'>
                    {title3} <span className='title4'>{title4}</span>
                </span>
            </div>
            <div className='panel2'>
                <Image src={imgSrc} alt="Bucket Image" width={width} height={height} />
            </div>
        </div>
    )
}