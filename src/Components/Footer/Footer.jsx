import "./Footer.css"
import High from "/assets/Image/High.png"
import Warranty from "/assets/Image/Warranty.png"
import shipping from "/assets/Image/shipping.png"
import support from "/assets/Image/support.png"
import DetailsFooter from "../DetailsFooter/DetailsFooter"


function Footer(){
    return(
        <>
        <div id="qualtydiv">

            <div id="highdiv">
                <img src={High} />
                <div>
                    <h2>High Quality</h2>
                    <p>crafted from top materials</p>
                </div>
            </div>

            <div id="Warrantydiv">
                <img src={Warranty} />
                <div>
                    <h2>Warranty Protection</h2>
                    <p>Over 2 years</p>
                </div>
            </div>

            <div id="shippingdiv">
                <img src={shipping} />
                <div>
                    <h2>Free Shipping</h2>
                    <p>Order over 150 $</p>
                </div>
            </div>

            <div id="supportdiv">
                <img src={support} />
                <div>
                    <h2>24 / 7 Support</h2>
                    <p>Dedicated support</p>
                </div>
            </div>
        </div>
        <DetailsFooter></DetailsFooter>
        </>
    )
}

export default Footer