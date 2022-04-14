import {ProductItem} from "../service/models";
import {Product} from "../interfaces/interfaces";


interface ProductDetailProps{
    product : Product
}

export default function ProductDetail(props : ProductDetailProps){
    return(
        <div className={'productDetail'}>
            <h3>{props.product.text}</h3>
            <p>{props.product.description}</p>
            <ul>
                <li>{props.product.status}</li>
                <li>{props.product.id}</li>
            </ul>

        </div>
    )
}