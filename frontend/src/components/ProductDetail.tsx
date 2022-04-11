import {ProductItem} from "../service/models";


interface ProductDetailProps{
    product : ProductItem
}

export default function ProductDetail(props : ProductDetailProps){
    return(
        <div className={'productDetail'}>
            <h3>{props.product.task}</h3>
            <p>{props.product.description}</p>
            <ul>
                <li>{props.product.status}</li>
                <li>{props.product.id}</li>
            </ul>

        </div>
    )
}