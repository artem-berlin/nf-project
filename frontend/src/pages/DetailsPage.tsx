import {useEffect, useState} from "react";
import {ProductItem} from "../service/models";
import {useNavigate, useParams} from "react-router-dom";

import {getProductById} from "../service/apiService";
import NavBar from "../components/NavBar";
import {useAuth} from "../auth/AuthProvider";
import ProductDetail from "../components/ProductDetail";


export default function DetailsPage(){

    const auth = useAuth()
    const nav = useNavigate()
    const [currentProduct, setCurrentProduct] = useState({} as ProductItem)
    const [error , setError] = useState('')

    const id = useParams()

    if (!auth.token){
        nav("/login")
    }


    useEffect(()=>{
        setError('')
        getProductById(id.productId ?? '', auth.token)
            .then((data : ProductItem) => setCurrentProduct(data))
            .catch(e => setError(e.message))
    },[id.productId, auth.token])



    return(
        <div className={'detailsPage'}>
            <NavBar/>


            {error && <h1>{error}</h1>}
            {currentProduct
                ?
                <ProductDetail product={currentProduct}/>
                :
                <p>loading....</p>

            }
        </div>
    )
}