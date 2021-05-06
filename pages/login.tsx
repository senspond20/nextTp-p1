import React from 'react';
import { AuthWrapper , InputWithLabel } from '@components/auth'

const Login = () =>{
    return(
        <AuthWrapper  title="로그인">
                <InputWithLabel label="이메일" name="email" placeholder="이메일"/>
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
            </AuthWrapper >
    )
}

export default Login;