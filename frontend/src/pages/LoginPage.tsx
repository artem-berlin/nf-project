import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";

export default function LoginPage(){
    return(
        <div className={'loginPage'}>
            <Announcement/>
           {/* <NavBar/>*/}
            <LoginForm/>
            <Footer/>
        </div>
    )
}