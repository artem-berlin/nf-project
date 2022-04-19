

import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";

export default function MainPage(){

    return(
        <div className={'main'}>
            <Announcement/>
            <NavBar/>

            <Footer/>
        </div>
    )
}