import './FinishTips.scss';
import RonBtn from '../../components/RonBtn';

export default function FinishTips() {
    return (
        <div className='finishTipsSection'>
            <p className='title1'>Tips</p>
            <p className='title2'>This is not mandatory but it will help us grow and contribute more to the community</p>
            <div className='box'>
                <RonBtn price="1,00" currency="RON" />
                <RonBtn price="2,00" currency="RON" className="btnBackground" />
                <RonBtn price="3,00" currency="RON" />
                <RonBtn price="4,00" currency="RON" />
            </div>
        </div>
    )
}