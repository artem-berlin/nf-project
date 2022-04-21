

import {CartProductType} from "../CartMain/CartMainStyles";
import {Link} from "react-router-dom";
import './ProductDetail.css';


interface ProductDetailProps{
    product : CartProductType
}

export default function ProductDetail(props : ProductDetailProps){
    return(
        <div className={'productDetail'}>
            <h3>{props.product.title}</h3>

            <Link to={`/${props.product.id}`} className={'product__link'}>
                <img src={props.product.image} alt = "image1" className={'product__image'} />
                <div className={'product__title'}>{props.product.title}</div>
            </Link>
            <p>{props.product.description}</p>
            <ul>
                <li>{props.product.price}</li>
                <li>{props.product.id}</li>
            </ul>

        </div>
    )
}