import "./About.css"
import Bitmap from "../img/Bitmap.png"

function About() {
    return (
        <>
        <section className="about">
            <div className="container">
                <div className="about__info">
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <img className="about__img" src={Bitmap} 
                                alt="bitmap" 
                                width="445"
                                 height="520" />
                            </li>

                            <li className="about__li">
                                <h1 className="about__heading">Our commitment</h1>
                                <p className="about__text">We’re built on a simple mission
                                 and a commitment to doing good along the way. 
                                 We want to make it easy for you to discover and brew the world’s best coffee at home.
                                  It all starts at the source. To locate the specific lots we want to purchase, we travel nearly
                                   60 days a year trying to understand the challenges and opportunities in each of these places.
                                   We collaborate with exceptional coffee growers and empower a global community of 
                                   farmers through with well above fair-trade benchmarks.
                                    We also offer training, support farm community initiatives, and invest in coffee plant science.
                                     Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive
                                      to their native growing region.</p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
        </>
    )
}

export default About