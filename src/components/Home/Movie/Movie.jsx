import EnglishMovies from "./EnglishMovies/EnglishMovies";
import HindiMovies from "./HindiMovies/HindiMovies";
import TamilMovies from "./TamilMovies/TamilMovies";

const Movie = () => {
    return(
        <>
            <HindiMovies />
            <EnglishMovies />
            <TamilMovies />
        </>
    )
};

export default Movie;