import React,{useState} from "react";
// import Layout from "@components/layouts/Layout";
import {getAnniversaryInfo} from "repository/openapi_b090041";
import {GetServerSideProps} from "next";
import AutoDataGirdBinder from "@components/board/AutoDataGirdBinder";

import moment from "moment";
import InputWithLabel from "@components/auth/InputWithLabel";
import { OpenDataUrlQueryParams } from "@utils/MakeUrl";
import axios from "axios";
import styled from "styled-components";
import InputArticle from "@components/board/InputArticle";

const Wrapper = styled.section`
    background-color: #fff;
    width:100%;
    display:flex;
    justify-content:center;
`;
const Container = styled.div`
    display:flex;
    padding:50px;
`;


const today = moment();

let params ={
    ServiceKey : process.env.REACT_APP_OPENDATA_SERVICE_KEY,
    pageNo : "",
    numOfRows : "100",
    solYear : today.year(), // 올해 년도
    solMonth : ""
};


async function handleSubmit(e: { preventDefault: () => void; }){
    // 새로고침을 막는다.
    e.preventDefault();
    // alert('d')
    const rootUrl = "http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService";
    const baseUrl = rootUrl + "/getAnniversaryInfo";
    let url = OpenDataUrlQueryParams(baseUrl, params) + '&type=JSON';
    console.log(url)
    try {
        const response = await axios.get(url)
        const data = response.data;
        const items = data.response.body.items.item;
        console.log(items)
        // return  items;
    }catch (e){
         console.log(e.response)
    }
    // return [];
    // console.log(data)
    // let response = (data!=null) ? data : null; 
    // return { props:  { response } }
}

type Props = {
    response : []
}
const Handler = ( props : Props) => {

    // const [inputs, setInputs] = useState({
    //     pageNo : "",
    //     numOfRows : "100",
    //     solYear : "2021",
    //     solMonth : ""
    // });
    // const {pageNo,numOfRows,solYear,solMonth} = inputs;

    /**
     * 두번째 요청부터는 새로고침을 발생시키지 않고 클라이언트 사이드 랜더링(CSR)을 한다.
     * @param e 
     */

    console.log(params)
    // console.log(data)
    return (
        // <Layout title="board">
            <Wrapper>
                <Container>
                    <form method={"get"} onSubmit={handleSubmit}>
                        {/* <div>
                            {
                                Object.keys(params).map((k, index)=> {
                                    const v = Object(params)[k];
                                
                                    return (<InputWithLabel key={index} label={k} defaultValue={ v!='' ? v : ''} name={k} style={style}/>)
                                    // return( <div  key={index}><label>{k} : </label><input type={"text"} defaultValue={ v!='' ? v : ''} name={k}/></div> )
        
                                })
                            }
                                <div><input type={"submit"} value={"조회"}/></div>
                        </div> */}
                        <InputArticle params={params}/>
                    </form>
                    <AutoDataGirdBinder data={props.response} title={"공공데이터 API 조회 결과입니다"}/>
                </Container>
            </Wrapper>
        // </Layout>
    );
}


/**
 * 새로 고침시 초기데이터 서버사이드 랜더링(SSR) or 정적사이트생성기(SSG) (검색엔진 노출)
 * 오늘 날짜는 변동 가능함으로 빌드시 고정되는 SSG대신 SSR 채용.
 * @returns 
 */
 export const getServerSideProps: GetServerSideProps = async () => {
    const data = await getAnniversaryInfo(params);
    let response = (data!=null) ? data : null; 
    return { props:  { response } }
}

export default Handler;



