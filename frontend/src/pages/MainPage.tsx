

import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import {useAuth} from "../auth/AuthProvider";
import {useEffect, useState} from "react";
import CartMain from "../CartMain/CartMain";

export default function MainPage(){

    /*const [products, setProducts] = useState([] as Array<Product>)*/
    const {token} = useAuth();

    useEffect(() => {
        fetch(`/api/main`,{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
           .then(response => response.json())
        /*   .then((products: Array<Product>) => setProducts(products));*/
    }, []);

    return(
        <div className={'main'}>
            <Announcement/>
            <NavBar/>
            <CartMain/>
                <Footer/>
        </div>
    )
}
/*


<div className={'products-list'}>
    { products.length > 0 && products.map(p => <ProductOverview key={p.id} product={p} />)}
</div>*/
