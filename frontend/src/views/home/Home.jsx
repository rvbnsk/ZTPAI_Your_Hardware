import './Home.css'
import '../../styles/main.css'
import Header from "../../components/Header/Header";
import {isAuthenticated} from "../../context/user/actions";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()

    isAuthenticated().then(ret => {
        if(ret.status !== 200) {
            navigate("/login")
        }
    })

    return <div className="main_page">
            <Header stage={"LOGGED_IN"} />

            <div className="main_text">
                <p>Welcome to Your Hardware, where PC customization is our passion. We're dedicated to providing you with all the information you need to build the ultimate custom PC. From expert advice and tutorials, to product reviews and industry news, we have it all.
                </p>
                <p>Whether you're a seasoned builder or just getting started, our goal is to make the building process easy and enjoyable. Browse our site and get inspired by the latest trends and innovations in the world of PC customization.
                </p>
                <p>Join the community of PC enthusiasts at Your Hardware and start your journey towards building the custom PC of your dreams. We're here to help you every step of the way.
                </p>
            </div>

        </div>
}

export default Home;