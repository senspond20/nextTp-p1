import React from "react";
// import Layout from "@components/layouts/Layout";
import {getAnniversaryInfo} from "repository/openapi_b090041";
import {GetServerSideProps} from "next";
// import AutoDataGirdBinder from "@components/board/AutoDataGirdBinder";

import moment from "moment";

/**
 * Posts View를 랜더링 한다.
 * @constructor
 * @param props
 */
const styleUl ={
    center : {
        margin : '0 auto',
        textAlign:'center' as const
    },
    form :{
        border : '1px solid red',
        padding : '15px'
    }
}

const today = moment();
const params ={
    ServiceKey : process.env.REACT_APP_OPENDATA_SERVICE_KEY,
    pageNo : "",
    numOfRows : "100",
    solYear : "2021",
    solMonth :"4"
};
// @ts-ignore
const handleSubmit = (e) =>{
    e.preventDefault();
    alert('dfd')
}

// @ts-ignore
const Handler = ({data}) => {
    
// @ts-ignore
    
    let itemList = (data !=null) ? data.map((item,index)=>
        (
            <tr key={index}>
                {Object.keys(item).map(k => <td>{item[k]}</td> )}
            </tr>
        )
    ) : null
 
    return (
        // <Layout title="board">
            <div style={styleUl.center}>
                <h1>Data Get</h1>
                <form method={"get"} style={styleUl.form} onSubmit={handleSubmit}>
                    {
                        Object.keys(params).map(k => {
                            const v = Object(params)[k];
                            return( <div><label>{k} : </label><input type={"text"} value= {v} name={v}/></div> )
                        })
                    }
                    <div><input type={"submit"} value={"조회"}/></div>
                </form>

                {/*<AutoDataGirdBinder data={data}/>*/}
                <h3>공공데이터 포털 API를 통해 조회한 결과입니다</h3>

                {
                    data = null 
                    ?
                    <table style={styleUl.center}>
                        <thead>
                            <tr>
                                {Object.keys(data[0]).map(k => <th>{k}</th> )}
                            </tr>
                        </thead>
                        <tbody>
                                {itemList}
                        </tbody>
                    </table>
                    :
                    <table style={styleUl.center}>
                        <thead>
                            <tr>                   
                            </tr>
                        </thead>
                        <tbody>
                               <tr><td colSpan={6}>데이터가 존재하지 않습니다</td></tr>
                        </tbody>
                    </table>
                }
            </div>
        // </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const data = await getAnniversaryInfo(params);
    // const response =(data == null)? 0 : data;
    let reponse = (data!=null) ? data : null;

    return { props:  {reponse} }

}

export default Handler;



