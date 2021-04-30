// import {GetServerSideProps } from 'next'
import {Fragment} from "react";
// import Layout from "@components/layouts/Layout";
import axios from "axios";
import {GetServerSideProps} from "next";

const style ={
    title :{textAlign:'center' as const},
}

async function getDate(){
    const url = "http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getAnniversaryInfo?ServiceKey=pikPyqBgw3tFQn4GlCCkcGLnhG0S%2BDrdo676M8ePXOpPnwVKDziXnpF4H%2F%2Fc6lqBwC3RL9Kn07yfPBCzr1YHgQ%3D%3D&pageNo=&numOfRows=300&solYear=2021&solMonth=&type=JSON";
    // const url ="https://huniverse.co.kr"
    try {
        const response = await axios({
            method:'get',
            url : url,
            headers :{'Content-Type' :'application/json'}
        });
        const data = response.data;
        const items = data.response.body.items.item;
        return items;
    }catch (e){
       console.log(e.response.data)
    }
}
interface Item {
    datekind : string,
    dataName : string,
    isHoliday : String,
    locDate : string
}
// type Props = {
//     data: any
// }
// @ts-ignore
/**
 * Posts View를 랜더링 한다.
 * @constructor
 * @param props
 */
const styleUl ={
    borderBottom : '1px solid black'
}

const Handler = ({data}) => {
    // const items = Array(data);
    // console.log(items);
    // console.log(items[0]);
    // console.log(items[0].item);
    {/*<div dangerouslySetInnerHTML={ {__html:dd}}></div>*/}
    // const dd = items[0].item;
// @ts-ignore
    const itemList = data.map((item,index)=>
        (
            <ul key={index} style={styleUl}>
                <li>dateKind : {item.dateKind}</li>
                <li>isHoliday : {item.isHoliday}</li>
                <li>dateName : {item.dateName}</li>
                <li>locdate : {item.locdate}</li>
            </ul>
        )
    );
    return (
        // <Layout title="board">
            <Fragment>
                <h1 style={style.title}>Data</h1>
                {itemList}
            </Fragment>
        // </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const data = await getDate();
    return { props: {data }}
}

export default Handler;



