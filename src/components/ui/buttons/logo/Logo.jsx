import logo from '../../../../assets/images/sneakerspot.png'
import './Logo.scss'

const Logo = () => {

    return (
        <div className='logo_wrapper'>
            <a href="/">
            </a>    
            <img src={logo} className="logo" alt="logo" />
        </div>
    )

}

export default Logo