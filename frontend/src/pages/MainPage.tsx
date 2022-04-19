

import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import {useAuth} from "../auth/AuthProvider";
import {useEffect, useState} from "react";
import CartMain from "../CartMain/CartMain";
import {getAllProducts} from "../service/apiService";
import {Product} from "../interfaces/interfaces";

export default function MainPage(){

    //const [products, setProducts] = useState([] as Array<Product>)
    const {token} = useAuth();
/*
    useEffect(() => {
        getProducts(token)
            .then((products: Array<Product>) => setProducts(products));
    }, []);*/

    return(
        <div className={'main'}>
            <Announcement/>
            <NavBar/>
            <CartMain/>
                <Footer/>
        </div>
    )
}

