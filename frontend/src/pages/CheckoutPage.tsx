import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Checkout from "../components/Checkout";
import {useAuth} from "../auth/AuthProvider";
import {useEffect} from "react";

export default function CheckoutPage(){
    const {token} = useAuth();

    useEffect(() => {
        fetch(`/api/main`,{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(response => response.json())

    }, []);

    return(
        <div className={'main'}>
            <Announcement/>

            <Checkout/>
            {/*<FakeBody/>*/}
            <Footer/>
        </div>
    )
}