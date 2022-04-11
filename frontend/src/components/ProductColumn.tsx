import {ProductItem} from "../service/models";

import {Dispatch, SetStateAction} from "react";
import './ProductColumn.css'
import Product from "./Product";

interface ProductColumnProps{
    items : Array<ProductItem>
    state : string
    update : Dispatch<SetStateAction<ProductItem[]>>
}

export default function ProductColumn(props : ProductColumnProps){
    return(
        <div className={'productColumn'}>
            <h1 className={'col_text'}>{props.state}</h1>
            {props.items.map(product => <Product update={props.update} key={product.id} infos={product}/>)}
        </div>
    )
}