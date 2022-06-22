import '../order/OrderSummary.scss';
import SummaryCost from '../../components/SummaryCost';
import ShowMoreBtn from '../../components/ShowMoreBtn';

export default function FinishSummary() {
    return (
        <div className='orderSummarySection'>
            <span className='title1'>Summary</span>
            <div className='panel'>
                <SummaryCost title="Total cost" price="62,00" currency="RON" />
                <SummaryCost title="Total delivery cost" price="62,00" currency="RON" />
                <SummaryCost title="Total" price="62,00" currency="RON" total1BigSize="total1BigSize" total2BigSize="total2BigSize" />
            </div>
            <span className='finishSummaryTxt'>
                For sending the order you hereby agree with the Terms and conditions <br /> and Confidiantiality Policies 
            </span>
            <center><ShowMoreBtn title="SEND ORDER 62,00 RON" className="paddingNextStep noPadding" type="showMoreBtnType1" /></center>
        </div>
    )
}