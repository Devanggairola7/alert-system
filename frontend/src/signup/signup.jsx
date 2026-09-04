import Navbar from '../components/navbar/navbar'

function Signup() {
	return (
		<div>
			<h1>Sign Up</h1>
            <div id="Details">
                <input type="text" placeholder="Name"></input>
                <br />
                <input type="email" placeholder="Email"></input>
                <br />
                <input type="password" placeholder="Password"></input>
                <br />
                <button>Sign Up</button>
            </div>
		</div>
	)
}

export default Signup