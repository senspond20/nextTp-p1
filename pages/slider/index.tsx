import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Slider from "react-slick";
import "@public/slick.css"
// import Modal from "react-responsive-modal";
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

  // componentDidUpdate() {
  //let elements = document.querySelectorAll(".slide");
  // console.log(elements);
  //   elements.addEventListener("mousedown", this.clickHandler, false);
  //   elements.addEventListener("mousemove", this.clickHandler, false);
  //   elements.addEventListener("mouseup", this.clickHandler, false);
  // }

  onOpenModal = (e:any) => {
    e.preventDefault();
    this.setState({ open: true, index: e.target.dataset.index });
    console.log(e.target.dataset.index);
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  slideClicked = (e:any) => {
    e.preventDefault();
    console.log(e.type);
  };

  // nextClick = currentSlideIndex => {
  //   if (currentSlideIndex === 0) {
  //     document.querySelector(".slick-prev").setAttribute("aria-disabled", true);
  //   }
  // };
  render() {
    const { open } = this.state;
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

    const settings = {
      arrows: true,
      centerMode: true,
      edgeFriction: 1,
      infinite: false,
      swipeToSlide: true,
      variableWidth: true,
      accessibility: true,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
      focusOnSelect: true,
      draggable: true

      // afterChange: this.nextClick
    };

    return (
      <div className="slides">
        <h2> Multiple items </h2>
        <Slider {...settings}>
          {this.state.slides.map((slide, index) => {
            return (
              <div key={index}>
                {/* <a
                  href="javascript:void(0)"
                  className="slide"
                  onClick={this.onOpenModal}
                  tabIndex="0"
                > */}
                  <img src={slide.img} data-index={index} />
                  <p>Slide {index}</p>
                {/* </a> */}
              </div>
            );
          })}
        </Slider>
        {/* <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Simple centered modal {this.state.index}</h2>
        </Modal> */}
      </div>
    );
  }
}
export default MultipleItems;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<MultipleItems />, rootElement);
