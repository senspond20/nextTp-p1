import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const Label = styled.label`
    font-size: 1rem;
    color: #eee;
    margin-bottom: 0.25rem;
`;
const Input = styled.input`
    width: 100%;
    border :1px solid #eee;
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;

const InputWithLabel = (label : any, ...rest : []) =>{
    return (
        <div>
            <Label>{label}</Label>
            <Input type ='text' {...rest}/>
        </div>
    )
}
type Props ={
    params: object;
}
// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const InputArticle = (props : Props) => {

    const arr = Object.keys(props.params);
   
    return (
            <div>
                {/* {
                (Array.isArray(arr)) ?
                    arr.map((k, index)=> {
                        const v = Object(dto.params)[k];
                        return (<InputWithLabel key={index} label={k} defaultValue={ v!='' ? v : ''} name={k} />)
                        // return( <div  key={index}><label>{k} : </label><input type={"text"} defaultValue={ v!='' ? v : ''} name={k}/></div> )

                    }) :<div></div>
                } */}
                    <div><input type={"submit"} value={"조회"}/></div>
            </div>
    )

};

export default InputArticle;