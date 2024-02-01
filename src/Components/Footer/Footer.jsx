import "./Footer.css"
import Logojon from "../img/logojon.png"
import Img from "../img/ikon.png"


function Footer() {
    return (
        <>
        <footer className="footer">
            <div className="container">
            <a className="footer__link" href="#link">
            <img
              className="footer__logo"
              src={Logojon}
              alt="footer logo"
              width="237"
              height="27"
            />
          </a>

          <nav className="footer__nav">
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__link" href="#link">
                  Home
                </a>
              </li>

              <li className="footer__item">
                <a className="footer__link" href="#link">
                  ABOUT US
                </a>
              </li>

              <li className="footer__item">
                <a className="footer__link" href="#link">
                  Create your plan
                </a>
              </li>
            </ul>
          </nav>

          <nav className="footer__nav">
            <ul className="footer__list">

              <li className="footer__item">
                <a className="footer__link" href="#link">
                 <img className="footer__img" 
                 src={Img} 
                  alt="footer img"
                   width=""
                   height="" />
                </a>
              </li>
            </ul>
          </nav>
            </div>
        </footer>
        </>
    )
}

export default Footer;