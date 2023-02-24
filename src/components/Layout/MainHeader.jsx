import { NavLink } from 'react-router-dom';
import logo from '../../Assets/images/movie-logo.jpg'
import style from './MainHeader.module.css';

const MainHeader = () => {
    return(
        <header>
            <div className={style.header_logo}>
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><NavLink to={"/"} activeClassName={style.active}>Home</NavLink></li>
                    <li><NavLink to={"/hindi-movies"} activeClassName={style.active}>Hindi Movies</NavLink></li>
                    <li><NavLink to={"/tamil-movies"} activeClassName={style.active}>Tamil Movies</NavLink></li>
                    <li><NavLink to={"/english-movies"} activeClassName={style.active}>English Movies</NavLink></li>
                </ul>
            </nav>
        </header>
    )
};

export default MainHeader;