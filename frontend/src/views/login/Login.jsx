import React, {useState} from 'react'
import Header from "../../components/Header/Header";
import {useNavigate} from "react-router-dom";
import './Login.css'
import {isAuthenticated, loginUser} from "../../context/user/actions";

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    isAuthenticated().then(ret => {
        if(ret.status === 200) {
            navigate("/home")
        }
    })

    const onSubmit = async (e) => {
        e.preventDefault()
        await loginUser({email, password})
            .then(res => res.json())
            .then(res => {
                localStorage.setItem("token", res.token)
                navigate("/home");
            });
    }

    return (
        <div>
            <Header stage={"LOGIN"}/>
            <form onSubmit={onSubmit}>
                <div className="container">
                    <label htmlFor="uname">Username</label>
                    <input className="input2" type="text" placeholder="Enter Username" name="email" required onChange={val => setEmail(val.target.value)}/>

                    <label htmlFor="psw">Password</label>
                    <input className="input2" type="password" placeholder="Enter Password" name="password" required onChange={val => setPassword(val.target.value)}/>

                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
