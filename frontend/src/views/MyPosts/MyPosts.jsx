import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {isAuthenticated} from "../../context/user/actions";
import {deletePostAction, fetchOwnedPosts, fetchPosts, updatePostAction} from "../../context/posts/actions";
import Header from "../../components/Header/Header";
import PostTile from "../../components/PostTile/PostTile";
import PostEdit from "../PostEdit/PostEdit";

const MyPosts = () => {

    const [posts, setPosts] = useState([]);

    const navigate = useNavigate()

    isAuthenticated().then(ret => {
        if(ret.status !== 200) {
            navigate("/login")
        }
    })

    const setUpPosts = async () => {
        const data = await fetchOwnedPosts();
        setPosts(data);
    }

    const deletePost = async (id) => {
        setPosts(posts.filter(posts => posts.id !== id));
        await deletePostAction(id);
    }

    const onUpdate = async (body) => {
        await updatePostAction(body);
        navigate("/posts");
    }

    useEffect(() => {
        setUpPosts();
    }, []);

    return <>
        <Header stage={"LOGGED_IN"}  />
        <div className="posts">
            {posts.map(post => {
                return <PostEdit post={post}  key={post.id} onDelete={deletePost} onUpdate={onUpdate}/>
            })}
        </div>
    </>

}

export default MyPosts;