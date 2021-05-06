import React from "react";
import SimpleModal from "@components/modal/SimpleModal";
import  LoginForm  from '@components/auth/LoginForm'

const App = () => {
    return (
        <SimpleModal buttonLabel="Open">
           <LoginForm/>
        </SimpleModal>
    );
}

export default App;
