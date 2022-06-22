import './OrderSummary.scss';
import SummaryCost from '../../components/SummaryCost';
import ShowMoreBtn from '../../components/ShowMoreBtn';

export default function OrderSummary() {
    return (
        <div className='orderSummarySection'>
            <span className='title1'>Order Summary</span>
            <div className='panel'>
                <SummaryCost title="Total cost" price="62,00" currency="RON" />
                <SummaryCost title="Total delivery cost" price="62,00" currency="RON" />
                <SummaryCost title="Total" price="62,00" currency="RON" total1BigSize="total1BigSize" total2BigSize="total2BigSize" />
            </div>
            <center><ShowMoreBtn title="NEXT STEP" className="paddingNextStep" type="showMoreBtnType1" /></center>
        </div>
    )
}