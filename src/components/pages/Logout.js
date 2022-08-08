const Logout = () => {

    //remove local storage data
    const removeLocalData = () => {
        localStorage.removeItem('auth');
        window.location.href = "/login";
        
    }
    
    return (
        <>
            <h1>Logout Successfully!</h1>
         click here to <span onClick={removeLocalData} style={{color: 'blue', cursor: 'pointer'}}>Login</span>
        </>
    );

}

export default Logout
