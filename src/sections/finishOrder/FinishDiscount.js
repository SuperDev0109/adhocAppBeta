import './FinishDiscount.scss';
import ShowMoreBtn from '../../components/ShowMoreBtn';

export default function FinishDiscount() {
    return (
        <div className='finishDiscountSection'>
            <p className='title1'>Available Discounts</p>
            <div className='box'>
                <span className='voucherTitle'>Voucher</span>
                <ShowMoreBtn title="Add voucher" />
            </div>
        </div>
    )
}