import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    /* position: sticky; */
    top:50px;
    display: flex;
    justify-content : center;
    align-items: center;
    width:500px;
   
`;
const InputDiv = styled.div`

`;
const Button = styled.div`
    background-color : ${oc.blue[6]};
    cursor: pointer;
    outline: none;
    color: #eee;
    margin-top:10px;
    padding:10px;
    width:100%;
    border-radius:3px;
    text-align:center;
    font-size:1.3rem;
    font-weight:600;
`;
const Label = styled.label`
    font-size: 1rem;
    color: ${oc.gray[6]};
    margin-bottom: 0.25rem;
`;
const Input = styled.input`
    width: 100%;
    border :1px solid ${oc.gray[3]};
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;

//@ts-ignore
const InputWithLabel = ({label, ...rest}) =>{
    return (
        <InputDiv>
            <Label>{label}</Label>
            <Input type ='text' {...rest}/>
        </InputDiv>
    )
}
type Props ={
    params: object;
}
// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const InputArticle = (props : Props) => {

    const arr = Object.keys(props.params);
   
    return (
            <Wrapper>
                <div>
                {
                (Array.isArray(arr)) ?
                    arr.map((k, index)=> {
                        const v = Object(props.params)[k];
                        return (<InputWithLabel key={index} label={k} defaultValue={ v!='' ? v : ''} name={k}  />)
                
                        // return( <div  key={index}><label>{k} : </label><input type={"text"} defaultValue={ v!='' ? v : ''} name={k}/></div> )

                    }) :<div></div>
                }
                    <div><Button>조회</Button></div>
                </div>
            </Wrapper>
    )

};
InputWithLabel.propTypes = {
    label: PropTypes.string.isRequired,
    // rest: PropTypes.oneOfType([
    //   PropTypes.arrayOf(PropTypes.node),
    //   PropTypes.node
    // ]).isRequired
  };
export default InputArticle;