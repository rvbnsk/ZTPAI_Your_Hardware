import React from 'react'
import './About.css'
import '../../styles/main.css'
import Header from "../../components/Header/Header";
import {useNavigate} from "react-router-dom";
import {isAuthenticated} from "../../context/user/actions";

const About = () => {
    const navigate = useNavigate()

    isAuthenticated().then(ret => {
        if(ret.status !== 200) {
            navigate("/login")
        }
    })

    return (
        <div className="about">
            <Header stage={"LOGGED_IN"}/>

            <div className="about_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id justo auctor, condimentum massa
                    ac,
                    auctor arcu. Morbi consectetur mollis lorem, maximus gravida sem maximus ut. In consequat pretium
                    quam
                    ac hendrerit. Mauris consectetur lectus vel mauris elementum lobortis. Cras lorem quam, blandit nec
                    enim
                    eu, sodales venenatis urna. Integer commodo rutrum fringilla. Sed accumsan ac orci sit amet
                    hendrerit.
                    Sed condimentum, urna a iaculis posuere, tortor diam ullamcorper nunc, quis finibus erat lorem id
                    metus.</p>
                <p className="visit">You can visit us on</p>
                <div className="icons">
                    <a href="https://www.facebook.com/"><img src="src/media/icons8-facebook-240.png"/></a>
                    <a href="https://www.instagram.com/"><img src="src/media/icons8-instagram-240.png"/></a>
                    <a href="https://www.linkedin.com/"><img src="src/media/icons8-linkedin-240.png"/></a>
                    <a href="https://www.github.com/"><img src="src./media/icons8-github-240.png"/></a>
                </div>
            </div>

            <div className="footer">
                made with ❤️ and ☕️ by <a href="https://www.github.com/rvbnsk">rvbnsk</a>
            </div>
        </div>
    )
}

export default About
