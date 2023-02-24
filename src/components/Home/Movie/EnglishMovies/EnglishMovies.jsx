import Card from "../../../UI/Card/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from '../AllMovies.module.css';

const EnglishMovies = () => {
    const englishMovieData = useSelector((state) => {
        return state.english.englishMovies
    })
    return(
        <section className={style.movieSection}>
            <div className={style.bollywood_card}>
                <div className={style.bollywood_card_heading}>
                    <h2>Hollywood Movies</h2>
                </div>
                <div className={style.card_movieList}>
                {englishMovieData.map((list) => (
                <Card className={style.movieCard} key={list.id}>
                    <div className={style.movie_img}>
                        <img src={list.img} alt="movie" />
                    </div>
                    <div className={style.movie_name_flex}>
                        <div className={style.movie_name}><h2>{list.movieName}</h2></div>
                        <Link to={"/seating"}>Book</Link>
                    </div>
                </Card>
            ))}
            </div>
            </div>
    </section>
    )
};

export default EnglishMovies;