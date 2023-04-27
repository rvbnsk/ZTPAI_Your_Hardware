import {useState} from "react";

const PostEdit = ({ post, onDelete, onUpdate }) => {

    const [isTriggered, setIsTriggered] = useState(false);
    const [newTitle, setNewTitle] = useState(post.title);
    const [newDsc, setNewDsc] = useState(post.description);

    const triggerUpdate = () => {
        setIsTriggered(!isTriggered);
    }

    return <>
        <div className="post" key={post.id} style={{backgroundImage: `url(http://localhost:8080/api/v1/data/image/${post.title})`}}>
            {!isTriggered ?
                <p className="post1_text">{post.title}</p>
                :
                <input value={newTitle} onChange={e => setNewTitle(e.target.value)}/>
            }
            {!isTriggered ?
            <a href={`postDetails/${post.id}`}>
                <p className="post1_read">{post.description}</p>
            </a>
                :
                <input value={newDsc} onChange={e => setNewDsc(e.target.value)}/>
            }

            {isTriggered && (
                <button onClick={e => onUpdate({id: post.id, title: newTitle, description: newDsc})}>submit</button>
            )}
        </div>
        <button style={{width: '80%', marginLeft: '10%'}} onClick={e => onDelete(post.id)}>delete</button>
        {isTriggered ?
            <button style={{width: '80%', marginLeft: '10%', backgroundColor: 'blue'}} onClick={triggerUpdate}>update</button>
            :
            <button style={{width: '80%', marginLeft: '10%', backgroundColor: 'red'}} onClick={triggerUpdate}>update</button>
        }
    </>
}

export default PostEdit;