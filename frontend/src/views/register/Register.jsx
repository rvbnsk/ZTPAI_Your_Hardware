import React, {useState} from 'react'
import Header from "../../components/Header/Header";
import './Register.css'
import {registerUser} from "../../context/user/actions";
import {useNavigate} from "react-router-dom";

export const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitForm = async (e) => {
        e.preventDefault()
        const ret = await registerUser({name, surname, email, password});
       if(ret.status === 200) {
           navigate("/login");
       }
    }

    return <>
        <Header stage={"REGISTER"} />

        <div className="form">
            <div className="container" style={{paddingLeft: "25%", paddingRight: "25%"}}>
                <label htmlFor="uname">Name</label>
                <input type="text" placeholder="Enter Name" name="name" required onChange={val => setName(val.target.value)}/>

                <label htmlFor="uname">Surname</label>
                <input type="text" placeholder="Enter Surname" name="surname" required onChange={val => setSurname(val.target.value)}/>

                <label htmlFor="uname">E-mail</label>
                <input type="text" placeholder="Enter E-mail" name="email" required onChange={val => setEmail(val.target.value)}/>

                <label htmlFor="uname">Password</label>
                <input type="password" placeholder="Enter Password" name="password" required onChange={val => setPassword(val.target.value)}/>

                <button type="submit" onClick={submitForm}>Register</button>
            </div>
        </div>
    </>
}
