import './PostTile.css'

const PostTile = ({post: {id, description, title, createadBy, url}}) => {
    return <>
        <div className="post" key={id} style={{backgroundImage: `url(${url})`}}>
            <p className="post1_text">{title}</p>
            <a href={`postDetails/${id}`}>
                <p className="post1_read">Read more...</p>
            </a>
        </div>
    </>
}


export default PostTile;