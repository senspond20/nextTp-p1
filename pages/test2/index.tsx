import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import {GetStaticProps} from "next";
import {getSampleData, SliderResponseDto} from "repository/sliderRep";
import "../../public/slick.css"
import "../../public/slider.css"
// import "../../public/slider.css"

function Arrow(props: {className: string;  }) {
    const {className} = props;
    return ( <button{...props} className={className}>OO</button> );
}



const ReactSlick = ({data} : SliderResponseDto) => {
    // data = getSampleData
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
  
        //  prevArrow: <Arrow  className={"slide-arrow slick-prev"}/>,
        //  nextArrow: <Arrow  className={"slide-arrow slick-next"}/>,
         nextArrow: ( <button className={"slide-arrow slick-next"}>OO</button>),
        customPaging: function (index: number): JSX.Element {
            return (
                    <div>
                        <ul className={"slide-banner"}>
                            <div className={"bn-item"}>{index + 1}</div>
                        </ul>
                    </div>
                );
        }
    };
    return (
        <Slider {...settings} className={"slider"}>
            {data.map((item, index) => (

                <div key = {index} className={"item"}>
                    <h3>{item.id}</h3>
                    <img src={item.url} alt={""} />

                </div>

            ))}
        </Slider>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    // const data : Img[] = getSampleData;
    const data  = getSampleData;
    return { props: { data }}
}
export default ReactSlick;