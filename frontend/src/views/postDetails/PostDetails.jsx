import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchPostById} from "../../context/posts/actions";
import {isAuthenticated} from "../../context/user/actions";
import Header from "../../components/Header/Header";
import './PostDetails.css';
import '../../styles/main.css';

const PostDetails = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});

    const navigate = useNavigate()

    isAuthenticated().then(ret => {
        if(ret.status !== 200) {
            navigate("/login")
        }
    })



    useEffect(() => {
        const getPost = async () => {
            const data = await fetchPostById(id);
            setPost(data);
        }

        getPost();
    }, []);

    console.log(post)

    return <>
        <Header stage={"LOGGED_ING"} />
        <div className="postDetails">
            <div className="post_picture">
                    <img src={post.url} alt={"post image"} width={'100%'} />
            </div>



            <div className="post_text_dtl">
                {post.title}
            </div>

            <div className="post_title_dtl">
                {post.description}
            </div>

        </div>
    </>;
}

export default PostDetails;