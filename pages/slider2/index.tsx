import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Slider from "react-slick";
// import Modal from "react-responsive-modal";
import "@public/slick.css";
import "@public/slider.css"
// import "./styles.scss";

class MultipleItems extends Component {
  constructor(props:any) {
    super(props);
    this.state = {
      slides: [
        {
          img: "https://dummyimage.com/600x400/000/fff"
        },
        {
          img: "https://dummyimage.com/600x400/000/B22222"
        },
        {
          img: "https://dummyimage.com/600x400/000/7CFC00"
        },
        {
          img: "https://dummyimage.com/600x400/000/ccccc"
        },
        {
          img: "https://dummyimage.com/600x400/000/dddddd"
        }
      ],
      open: false,
      index: "",
      elements: null
    };
  }

  render() {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
      <button
        {...props}
        className={
          "slick-prev slick-arrow" +
          (currentSlide === 0 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
      >
        Previous
      </button>
    );
    // @ts-ignore
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
      <button
        {...props}
        className={
          "slick-next slick-arrow" +
          (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
      >
        Next
      </button>
    );

    // @ts-ignore
    const settings = {
      infinite: true,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 2000,
      slidesToShow:1,
      slidesToScroll: 1,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
      centerPadding: "20px",
      arrows: true,
      dots: true,
      // afterChange: this.nextClick
    };

    // @ts-ignore
    return (
      <div className="slides">
        <h2> Multiple items </h2>
        <Slider {...settings} className={"slider"}>
          {this.state.slides.map((slide, index) => {
            return (
              <div key={index}>
                  <img src={slide.img} data-index={index} />
                  <p>Slide {index}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
export default MultipleItems;

