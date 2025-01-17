import logo from "../../assets/argentBankLogo.png"
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom'
import { selectUser } from "../../redux/selector"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
import { signOut, fetchUserData } from "../../redux/actions"

function Header() {

    const userData = useSelector(selectUser)
    const token = (localStorage.getItem('token') || sessionStorage.getItem('token'))
    const isRemembered = localStorage.getItem('isRemembered')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function clearStorage() {
        return (
            localStorage.clear(),
            sessionStorage.clear(),
            dispatch(signOut())
        )
    }

    function remember() {
        if (isRemembered) {
            dispatch(fetchUserData(token))
            navigate('/profile')
        } else {
            navigate('/login')
        }
    }

    return (
        token && userData.data ?
            <nav className="main-nav">
                <Link to='/' className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link to="/profile" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        {userData.data.firstName}
                    </Link>
                    <Link to="/" onClick={clearStorage} className="main-nav-item">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div>
            </nav>
            :
            <nav className="main-nav">
                <Link to='/' className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div onClick={remember} className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </div>
            </nav>
    )
}

export default Header;