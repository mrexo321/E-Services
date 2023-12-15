import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        arrows: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        lazyLoad: "ondemand",
    };

    return (
        <Slider className="overflow-hidden" {...settings}>
            <div>
                <img
                    className=" flex-shrink-0 w-full "
                    src="https://static.id.gtech.asia/prod/100039/20231110/05E5DC8972E5CC52478822C6424BD963.jpeg?x-oss-process=image/format,webp"
                    alt="Image 1"
                />
            </div>
            <div>
                <img
                    src="https://static.id.gtech.asia/prod/100039/20231110/D95D12A0607BCEE6095B59473A8461BA.jpeg?x-oss-process=image/format,webp"
                    alt="Image 2"
                />
            </div>
            <div>
                <img
                    src="https://static.id.gtech.asia/prod/100039/20231110/FB4854247E78B6BDDAA4E3130346DB77.jpeg?x-oss-process=image/format,webp"
                    alt="Image 3"
                />
            </div>
        </Slider>
    );
};

export default Carousel;
