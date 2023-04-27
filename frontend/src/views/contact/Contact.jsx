import React from 'react'
import './Contact.css'
import '../../styles/main.css'
import Header from "../../components/Header/Header";
import {useNavigate} from "react-router-dom";
import {isAuthenticated} from "../../context/user/actions";

export const Contact = () => {

    const navigate = useNavigate()

    isAuthenticated().then(ret => {
        if(ret.status !== 200) {
            navigate("/login")
        }
    })

    return (
        <div className="contact">
            <Header stage={"LOGGED_IN"}/>


            <div className="contact_form">
                <div className="wrap_contact">
                    <form className="contact__form__1">
				<span className="contact_title">
					Contact us!
				</span>

                        <div className="form" data-validate="Please enter your name">
                            <input className="input100" type="text" name="name" placeholder="Full Name"/>
                                <span className="focus-input100"></span>
                        </div>

                        <div className="form" data-validate="Please enter your email: e@a.x">
                            <input className="input100" type="text" name="email" placeholder="E-mail"/>
                                <span className="focus-input100"></span>
                        </div>

                        <div className="form" data-validate="Please enter your phone">
                            <input className="input100" type="text" name="phone" placeholder="Phone" />
                                <span className="focus-input100"></span>
                        </div>

                        <div className="form" data-validate="Please enter your message">
                            <textarea className="message" name="message" placeholder="Your Message"></textarea>
                            <span className="focus-input100"></span>
                        </div>

                        <div className="contact_btn">
                            <button className="contact100-form-btn">
						<span>
							<i className="fa fa-paper-plane-o m-r-6" aria-hidden="true"></i>
							Send
						</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
)
}
