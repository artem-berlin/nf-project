

import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import {useAuth} from "../auth/AuthProvider";
import {useEffect, useState} from "react";
import {Product} from "../interfaces/interfaces";
import ProductOverview from "../components/ProductOverview";
export default function MainPage(){

    const [products, setProducts] = useState([] as Array<Product>)
    const {token} = useAuth();

    useEffect(() => {
        fetch(`/api/main`,{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(response => response.json())
            .then((products: Array<Product>) => setProducts(products));
    }, []);

    return(
        <div className={'main'}>
            <Announcement/>
            <NavBar/>
            <div className={'products-list'}>
            { products.length > 0 && products.map(p => <ProductOverview key={p.id} product={p} />)}
            </div>
                <Footer/>
        </div>
    )
}