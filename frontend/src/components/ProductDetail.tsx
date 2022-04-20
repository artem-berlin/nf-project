

import {CartProductType} from "../CartMain/CartMainStyles";


interface ProductDetailProps{
    product : CartProductType
}

export default function ProductDetail(props : ProductDetailProps){
    return(
        <div className={'productDetail'}>
            <h3>{props.product.title}</h3>
            <p>{props.product.description}</p>
            <ul>
                <li>{props.product.price}</li>
                <li>{props.product.id}</li>
            </ul>

        </div>
    )
}