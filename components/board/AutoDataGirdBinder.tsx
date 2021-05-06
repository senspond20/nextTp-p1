import React from "react";
import styled from 'styled-components';

const Wrapper = styled.article``;
const Title = styled.h4`
    text-align: center;
    color : #555;
`;
const Table = styled.table`
    margin: 0 auto;
    text-align: center;
    border: 1px solid #eee;
    border-spacing:15px;
    background-color: rgba(0,0,0,0.015);
    border-radius: 9px;
`;
const Thead = styled.thead`
    border-bottom:10px solid #333;
    color : #3492df;
`;
const Tbody = styled.tbody`
`;

const Td = styled.td`
     font-size: 14px;
     border-bottom:1px solid #eee;
`;

type Prop ={
    data : any
    title : string
}

const AutoDataGirdBinder = (dto : Prop) =>{
    const data = dto.data;
    const checkData = (data !=null && Array.isArray(data));
    console.log(checkData)

    let head = (checkData)
    ? <tr>
        {Object.keys(data[0]).map((k,idx) => <th key={idx}>{k}</th> )}
      </tr>
    : <tr></tr>

    let itemList = (checkData)  
    ? data.map((item : any, index : number)=>
        (
            <tr key={index}>
                {Object.keys(item).map((k,idx) => <Td key={idx}>{item[k]}</Td> )}
            </tr>
        )
    ) : <tr><Td colSpan={6}>데이터가 존재하지 않습니다</Td></tr>

    return(
        <Wrapper>
            <Title>{dto.title}</Title>
            <Table>
                <Thead>
                    {head}
                </Thead>
                <Tbody>
                    {itemList}
                </Tbody>
            </Table>
        </Wrapper>

    )
}

export default AutoDataGirdBinder;