import React from "react";
import Slider from "react-slick";
import "@public/slick.css"
import "@public/slider.css"

// @ts-ignore
const SlickArrow = ({currentSlide,slideCount, className, child, ...props}): JSX.Element => (
    <button
        {...props}
        className={className + (currentSlide === 0 ? " slick-disabled" : "")}
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
    >{child}</button>
);

function Paging(index: number): JSX.Element {
    return (
        <div>
            <ul className={"slide-banner"}>
                <div className={"bn-item"}>{index + 1}</div>
            </ul>
        </div>
    );
}

const settings = {
    infinite: false,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow:1,
    slidesToScroll: 1,
    centerPadding: "20px",
    arrows: true,
    dots: true,
    prevArrow: <SlickArrow className={"slide-arrow slick-prev"} child={"prev"} currentSlide slideCount/>,
    nextArrow: <SlickArrow className={"slick-next slick-arrow"} child={"next"} currentSlide slideCount/>,
    customPaging: Paging
};


const SliderBase = ({itemList} : any) => {
    return (
        <Slider {...settings} className={"slider"}>
            {itemList}
        </Slider>
    );
}

export default SliderBase;