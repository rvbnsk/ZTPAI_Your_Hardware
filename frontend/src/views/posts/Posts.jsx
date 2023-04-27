import React, {useEffect, useState} from 'react'
import Header from "../../components/Header/Header";
import {fetchPosts} from "../../context/posts/actions";
import PostTile from "../../components/PostTile/PostTile";
import {useNavigate} from "react-router-dom";
import {isAuthenticated} from "../../context/user/actions";

export const Posts = () => {

    const [posts, setPosts] = useState([]);

    const navigate = useNavigate()

    isAuthenticated().then(ret => {
        if(ret.status !== 200) {
            navigate("/login")
        }
    })

    const setUpPosts = async () => {
        const data = await fetchPosts();
        setPosts(data);
    }

    useEffect(() => {
        setUpPosts();
    }, []);

    console.log(posts)

    return <>
        <Header stage={"LOGGED_IN"}  />
        <div className="posts">
            {posts.map(post => {
                return <PostTile post={post} key={post.id} url={post.url} />
            })}
        </div>
    </>
}
