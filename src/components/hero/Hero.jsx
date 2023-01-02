import './Hero.scss';
import bigImage from '../../assets/images/2023Sneakers.png';
import smallImage from '../../assets/images/yourdreamshoes.png'
import Button from '../ui/buttons/Button'

const Hero = () => {

       let thisImg;

    // changing img depended on screen size
        if (window.innerWidth > 800) {
            thisImg = bigImage
        } else {
           thisImg = smallImage
        }
    
    return (
        <div className="hero">
          {/*   <h1>SNAKER SPOT! THE FUTURE IS HERE!</h1> */}
           {/*  <div className="image_container">
            <img src={thisImg} alt="" />
            </div> */}
            <div className="call_to_action">
                <Button variant="light">BUY NOW</Button>
            </div>
        </div>
    )
}

export default Hero