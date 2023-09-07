import './header.style.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header-center">
                <img src={require('../../images/plane.png')} alt="Plane Icon" className="plane-icon" />
            </div>
        </header>
    )
}


export default Header