import React,{useRef,useState,useEffect} from 'react';
import AutoDataGirdBinder from "@components/board/AutoDataGirdBinder";
import {getAnniversaryInfo} from "repository/openapi_b090041";
import axios from 'axios';

let params ={
  ServiceKey : process.env.REACT_APP_OPENDATA_SERVICE_KEY,
  pageNo : "",
  numOfRows : "100",
  solYear : "2024", // 올해 년도
  solMonth : ""
};
console.log(params)
const Ajax = () =>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    
    useEffect(() => {
      async function fetchData(params){
        let response = null;
        try{
          let response = await getAnniversaryInfo(params)
          setIsLoaded(true);
          setItems(response);
        }catch(error){
          setIsLoaded(true);
          setError(error);
        }
      }
      fetchData(params);
     
    },[]);
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
              {items.map =(item,idx)=>{
                <div key={idx}>{item.dateName}</div>
              }}
          {/* {{items}} */}
          {/* <AutoDataGirdBinder data={items} title={"API 조회 결과입니다"}/> */}
        </div>
      );
    }
};

export default Ajax;
