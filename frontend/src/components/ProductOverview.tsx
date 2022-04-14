import {Product} from "../interfaces/interfaces";
import {Link} from "react-router-dom";

interface ProductOverviewProps {
    product: Product
}

export default function ProductOverview(props: ProductOverviewProps) {
    return (
        <div>
            <div>{props.product.title}</div>
            <div><img src={props.product.image} alt = "image1"/></div>
            <div><Link to={`/${props.product.id}`}>Details</Link></div>
        </div>
    )
}