import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {GetStaticProps} from "next";

type Props ={
    data : Img[]
}
type Img = {
    id?: number,
    url?: string
}
const getData : Img[]= [
    {id:1, url :"https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG92ZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id:2, url :"https://images.unsplash.com/photo-1518558997970-4ddc236affcd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id:3, url :"https://images.unsplash.com/photo-1475204257634-df83964505c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG92ZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id:4, url :"https://images.unsplash.com/photo-1550661113-8b62e04f52d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bG92ZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id:5, url :"https://images.unsplash.com/photo-1553389861-7849770715b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxvdmV8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
]

const ReactSlick = ({data} : Props) => {
    // data = getData;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px"
    };
    return (
        <Slider {...settings}>
            {data.map((item) => (
                <div>
                    <h3>{item.id}</h3>
                    <img src={item.url} alt={""}/>
                </div>
            ))}
        </Slider>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const data = getData;
    return {
        props: data
    }
}
export default ReactSlick;