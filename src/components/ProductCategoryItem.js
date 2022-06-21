import './ProductCategoryItem.scss';
import Image from './Image';

export default function ProductCategoryItem() {
    return (
        <div className='productCategoryItemComponent'>
            <Image src="images/product/item1.png" alt="product image kfc" width="190px" height="190px" className="border-20" />
            <span className='title'>Buckets</span>
        </div>
    )
}