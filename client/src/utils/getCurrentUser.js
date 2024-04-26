const getCurrentUser = () => {
    // console.log(JSON.parse(localStorage.getItem('user')))
    return JSON.parse(localStorage.getItem('currentuser'));
}

export default getCurrentUser;