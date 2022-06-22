import './Show404Page.scss';
import ShowMoreBtn from '../../components/ShowMoreBtn';
import Image from '../../components/Image';

export default function Show404Page() {
    return (
        <div className='show404PageSection'>
            <Image src="../images/error/404.png" alt="404 page" />
            <p className='title1'>Something went wrong, our team of monkeys are on it ..</p>
            <ShowMoreBtn title="Go back to the main page" type="showMoreBtnType1" />
        </div>
    )
}