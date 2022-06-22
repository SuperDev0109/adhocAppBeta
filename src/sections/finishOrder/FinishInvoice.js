import './FinishInvoice.scss';
import ShowMoreBtn from '../../components/ShowMoreBtn';

export default function FinishInvoice() {
    return (
        <div className='finishInvoiceSection'>
            <p className='title1'>Invoice</p>
            <p className='title2'>If you need an invoice, please add your company details</p>
            <div><ShowMoreBtn title="Add invoice details" /></div>
        </div>
    )
}