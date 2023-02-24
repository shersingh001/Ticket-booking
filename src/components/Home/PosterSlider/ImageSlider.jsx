import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './ImageSlider.module.css';
import images from "./Images";

const ImageSlider = () => {
    const sliderImages = images
    const settings = {
        infinite: true,
        dots: true,
        lazyLoad: true,
        fade: true,
        cssEase: "linear",
        autoplay: true,
        autoplaySpeed: 3000,
    }
    return(
        <div className={style.slider}>
            <Slider {...settings}>
                {sliderImages.map((img) => (
                    <div key={img.id}><img src={img.src} alt={img.alt} /></div>
                ))}
            </Slider>
        </div>
    )
};

export default ImageSlider;