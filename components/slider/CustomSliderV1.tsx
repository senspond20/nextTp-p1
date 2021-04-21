import Slider from "react-slick";
// import {SliderResponseDto} from "repository/sliderRep";
import "@public/slick.css"
import "@public/slider.css"

function Arrow(props: { className: string;  }) {
    const { className} = props;
    return ( <button{...props} className={className}>ㅇㅇgg</button> );
}

const settings = {
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow:1,
    slidesToScroll: 1,
    // fade:true,
    // cssEase:"ease",
    // easing:"ease",
    // centerMode: true,
    centerPadding: "20px",
    arrows: true,
    dots: true,
    // focus:false,
    prevArrow: <Arrow  className={"slide-arrow slick-prev"}/>,
    nextArrow: <Arrow  className={"slide-arrow slick-next"}/>,
    customPaging: function (index: number): JSX.Element {
        return (
            <div>
                <ul className={"slide-banner"}>
                    <div className={"bn-item"}>jhkjhkj${index}</div>
                </ul>
            </div>
        );
    }
};

const CustomSlider = ({data} : any) => {
    return (
        <Slider {...settings} className={"slider"}>
            {data}
        </Slider>
    );
}

export default CustomSlider;