
const registerUser = async (user) => {
    const data = await fetch("http://localhost:8080/api/v1/user", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        return res;
    });

    return data;
}

const loginUser = async (user) => {
    const data = await fetch("http://localhost:8080/api/v1/auth", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        return res;
    });

    return data;
}

const isAuthenticated = async () => {

    const token = localStorage.getItem("token")

    return await fetch("http://localhost:8080/api/v1/auth/verify", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then((res) => {
        return res;
    });
}

export { registerUser, loginUser, isAuthenticated }