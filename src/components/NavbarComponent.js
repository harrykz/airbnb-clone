import AirbnbLogo from '../images/Airbnb-logo.png';

function NavbarComponent(){
    return(
        <nav className='airbnb--navigation_bar'>
            <img src={AirbnbLogo} className='airbnb--image' />
        </nav>
    )
}

export default NavbarComponent;