import './OrderTitle.scss';
import BackBtn from '../../components/BackBtn';
import PropTypes from 'prop-types';

OrderTitle.propTypes = {
    title: PropTypes.string
}

export default function OrderTitle({ title }) {
    return (
        <div className='OrderTitleSection'>
            <div className='container panel'>
                <BackBtn text='Back' className='backBtnType2' />
                <center><span className='orderTitle'>{title}</span></center>
            </div>
        </div>
    )
}