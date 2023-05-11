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
                <p>Your Hardware was created to serve the needs of PC customization enthusiasts. Our team of experts is passionate about all things PC building and wants to share that passion with the community.

Our goal is to provide a comprehensive resource for anyone interested in building their own custom PC, regardless of their level of experience. From tutorials and product reviews, to the latest industry news and trends, we've got you covered.

At Your Hardware, we believe in delivering high-quality content and resources that can help you achieve your PC building goals. Whether you're a seasoned builder or just starting out, feel free to reach out to us with any questions or ideas.

Join the community of like-minded PC enthusiasts at Your Hardware and start your journey towards building the custom PC of your dreams.</p>
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
