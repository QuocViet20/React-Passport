
import { Link } from "react-router-dom"

const Navbar = ({ user }) => {
    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self")
    }
    return (
        <div className="navbar">
            <span className="logo"><Link className="link" to="/">Lama App</Link></span>
            {user ?
                (

                    <ul className="list">
                        <li className="listItem">
                            <img className="avatar" src={user.photos[0].value} />
                        </li>
                        <li className="listItem"> {user.displayName}</li>
                        <li className="listItem" onClick={logout}> logout</li>
                    </ul>
                ) :
                (<Link className="link" to="/login">Login</Link>

                )}
        </div>
    )
}

export default Navbar