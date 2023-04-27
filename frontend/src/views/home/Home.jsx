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

    return <>
        <div className="main_page">
            <Header stage={"LOGGED_IN"} />
        </div>


        <div className="main_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id justo auctor, condimentum massa ac,
            auctor
            arcu. Morbi consectetur mollis lorem, maximus gravida sem maximus ut. In consequat pretium quam ac
            hendrerit.
            Mauris consectetur lectus vel mauris elementum lobortis. Cras lorem quam, blandit nec enim eu, sodales
            venenatis
            urna. Integer commodo rutrum fringilla. Sed accumsan ac orci sit amet hendrerit. Sed condimentum, urna a
            iaculis
            posuere, tortor diam ullamcorper nunc, quis finibus erat lorem id metus.
        </div>
    </>
}

export default Home;