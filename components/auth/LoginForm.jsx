import React from "react";
import { InputWithLabel } from './InputWithLabel'
import styled from 'styled-components';

const LoginWrapper = styled.div`
    
`;

const Img = styled.img`
    src : url(${props => props.src});
    width : '100%';
    object-fit : 'cover';
    border-radius: '4px';
`;

const LoginForm = () => {
    return (

        <LoginWrapper>
          <h2>Login Form Modal</h2>
          <Img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt=""/>
          <form>
             <InputWithLabel label="이메일" name="email" placeholder="이메일"/>
             <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
             <div>
                <input type ="submit" value="전송"/>
             </div>
          </form>
        </LoginWrapper>
    );
}

export default LoginForm;
