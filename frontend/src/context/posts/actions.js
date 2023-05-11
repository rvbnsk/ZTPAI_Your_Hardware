import axios from "axios";

const fetchPosts = async () => {

    const token = localStorage.getItem("token")

    const data = await fetch("http://localhost:8080/api/v1/data", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => {
            let a = res.json();
            return a
        });

    return data;
};

const fetchOwnedPosts = async () => {

    const token = localStorage.getItem("token")

    const data = await fetch("http://localhost:8080/api/v1/data/owned", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => {
            let a = res.json();
            return a
        });

    return data;
};

const fetchPostById = async (id) => {

    const token = localStorage.getItem("token")

    const data = await fetch(`http://localhost:8080/api/v1/data/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => {
            let a = res.json();
            return a
        });

    return data;
};

const deletePostAction = async (id) => {
    const token = localStorage.getItem("token")

    const data = await fetch(`http://localhost:8080/api/v1/data/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

const updatePostAction = async (body_) => {
    const token = localStorage.getItem("token")
    console.log(" nigger ")
    console.log(body_)

    // const data = await fetch(`http://localhost:8080/api/v1/data`, {
    //     method: 'PUT',
    //     body: {
    //         id: body_.id,
    //         title: body_.title,
    //         description: body_.description
    //     },
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}`
    //     }
    // });


    await axios.put('http://localhost:8080/api/v1/data', body_, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}


export { fetchPosts, fetchPostById, fetchOwnedPosts, deletePostAction, updatePostAction }