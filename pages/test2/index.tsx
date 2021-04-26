import React from "react";
import {GetStaticProps} from "next";
import {getSampleData, SliderResponseDto} from "repository/sliderRep";
import SliderBase from "@components/slider/SliderBase";

const ReactSlick = ({data} : SliderResponseDto) => {
    return (
        <SliderBase itemList ={
            data.map((item, index) => (
                    <div key = {index} className={"item"}>
                        <h3>{item.id}</h3>
                        <img src={item.url} alt={""} />
                    </div>
            ))
        }/>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    // const data : Img[] = getSampleData;
    const data  = getSampleData;
    return { props: { data }}
}
export default ReactSlick;