import "./User.css";
import Xarita from "../img/xarita.png"
import Xarita2 from "../img/xarita2.png"
import Xarita3 from "../img/xarita3.png"


function User() {
    return (
        <>
        <section className='user'>
            <div className='container'>
                <div className='user__info'>
                    <h3 className='user__heading'>Our headquarters</h3>

                    <nav className='user__nav'>
                        <ul className='user__list'>
                            <li className='user__item'>
                                <img className='user__img'
                                 src={Xarita}
                                 alt="karta"
                                  width="40" 
                                  height="49"/>
                                <h2 className="user__headingg">United Kingdom</h2>
                                <p className="user__text">68  Asfordby Rd <br />Alcaston <br />SY6 1YA <br />+44 1241 918425</p>
                            </li>

                            <li className='user__item'>
                                <img className='user__img'
                                 src={Xarita2}
                                 alt="karta"
                                  width="40" 
                                  height="49"/>
                                <h2 className="user__headingg">United Kingdom</h2>
                                <p className="user__text">68  Asfordby Rd <br />Alcaston <br />SY6 1YA <br />+44 1241 918425</p>
                            </li>

                            <li className='user__item'>
                                <img className='user__img'
                                 src={Xarita3}
                                 alt="karta"
                                  width="40" 
                                  height="49"/>
                                <h2 className="user__headingg">United Kingdom</h2>
                                <p className="user__text">68  Asfordby Rd <br />Alcaston <br />SY6 1YA <br />+44 1241 918425</p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
        </>
    )
}

export default User;