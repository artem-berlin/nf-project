import {Product} from "../interfaces/interfaces";
import {Link} from "react-router-dom";

interface ProductOverviewProps {
    product: Product
}

export default function ProductOverview(props: ProductOverviewProps) {
    return (

        <div className={'product'}>


            <Link to={`/${props.product.id}`} className={'product__link'}>
                <img src={props.product.image} alt = "image1" className={'product__image'} />
                <div className={'product__title'}>{props.product.title}</div>
            </Link>
        </div>

        /*<div>
            <div>{props.product.title}</div>
            <div><img src={props.product.image} alt = "image1"/></div>
            <div><Link to={`/${props.product.id}`}>Details</Link></div>
        </div>*/
    )
}