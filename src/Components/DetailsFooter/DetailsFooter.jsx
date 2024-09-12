import "./DetailsFooter.css"
import { Link } from "react-router-dom";

function DetailsFooter(){
    return(
        <div id="alldetdiv">

        <div id="detailsdiv">
            <div id="funirodiv">
                <h2>Funiro.</h2>
                <p>400 University Drive Suite 200 Coral Gables,</p>
                <p>FL 33134 USA</p>
            </div>
            
            <ul id="ullinks">
                <li id="linksword">Links</li>
            <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Shope">Shope</Link>
          </li>
          <li>About</li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
           
            </ul>

            <ul id="ulhelp">
                <li id="helpword">Help</li>
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
            </ul>

            <div id="newsdiv">
                <p>Newsletter</p>
                <input type="text" placeholder="Enter Your Email Address" />
                <label>SUBSCRIBE</label>
            </div>
        </div>

            <div>
                <p>2023 furino. All rights reverved</p>
            </div>
        </div>
    )
}

export default DetailsFooter