import style from './SeatingHeader.module.css';
import {BiArrowBack} from 'react-icons/bi';
import { Link } from 'react-router-dom';

const SeatingHeader = () => {
    return(
        <header className={style.seatingHeader}>
            <div className={style.back_arrow}>
                <Link to={"/"}>
                    <span>{<BiArrowBack />}</span>
                </Link>
            </div>
            <div className={style.header_text}>
                <h2>Book My Ticket</h2>
            </div>
        </header>
    )
};

export default SeatingHeader;