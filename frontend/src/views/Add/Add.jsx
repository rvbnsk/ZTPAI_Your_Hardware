import React, {useState} from 'react'
import './Add.css'
import '../../styles/main.css'
import Header from "../../components/Header/Header";
import {useNavigate} from "react-router-dom";
import {isAuthenticated} from "../../context/user/actions";
import axios from "axios";

export const Add = () => {

    const navigate = useNavigate()
    const [file, setFile] = useState(null)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    isAuthenticated().then(ret => {
        if(ret.status !== 200) {
            navigate("/login")
        }
    })

    const submitForm = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token")

        let formData = new FormData();
        formData.append('file', file[0])
        formData.append('title', title)
        formData.append('description', description)

        axios.post('http://localhost:8080/api/v1/data/upload', formData,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                navigate("/myposts")
            });
    }

    return (
        <div className="add">

            <Header stage={"LOGGED_IN"}/>

            <form onSubmit={submitForm}>
                <div className="container">
                    <input type="title" name="text" placeholder="title" onChange={e => setTitle(e.target.value)}/>
                        <textarea name="description" rows="5" placeholder="description" onChange={e => setDescription(e.target.value)}/>
                        <input type="file" name="file" onChange={e => setFile(e.target.files)}/>
                      <button type="submit">send</button>
                </div>
            </form>
        </div>
    )
}
