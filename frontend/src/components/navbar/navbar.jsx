function Navbar() {
    function navigate(path) {
        window.history.pushState({}, '', path)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }

    return (
        <div>
            <header>
                <span id="headimage">
                    <img src="" alt="" />
                </span>       
                <nav id="button">
                    <button className="button" onClick={() => navigate('/')}>Home</button>
                    <button className="button" onClick={() => navigate('/about')}>About</button>
                    <button className="button" onClick={() => navigate('/dashboard')}>Dashboard</button>
                    <button className="button" onClick={() => navigate('/signup')}>Sign up</button>
                    <button className="button" onClick={() => navigate('/login')}>Login</button>
                </nav>
            </header>
        </div>
    )
}

export default Navbar