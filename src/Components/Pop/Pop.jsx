import "./Pop.css"
import Cofee from "../img/cofee.png"

function Pop() {
    return (
        <>
        <section className="pop">
            <div className="container">
                <div className="pop__info">
                    <nav className="pop__nav">
                        <ul className="pop__list">
                            <li className="pop__item">
                                <h2 className="pop__heading">Uncompromising quality</h2>
                                <p className="pop__text">Although we work with growers who pay close attention to all stages of harvest and processing,
                                 we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. 
                                 Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee,
                                  so that brewing is easy and enjoyable.</p>
                            </li>

                            <li className="pop__li">
                                <img className="pop__img" 
                                src={Cofee}
                                 alt="Cofee"
                                  width="445"
                                   height="474" />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
        </>
    )
}

export default Pop;