import React,{useState} from "react";
// import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { InputWithLabel } from '@components/auth'
// @ts-ignore
import { Modal } from 'react-responsive-modal';

const styles = {
    fontFamily: "sans-serif" as const,
    textAlign: "center" as const
};

const App = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    return (
        <div style={styles}>
            <button onClick={onOpenModal}>Open modal</button>
            <Modal open={open} onClose={onCloseModal}>
                <h2>Login Form</h2>
                <form>
                    <InputWithLabel label="이메일" name="email" placeholder="이메일"/>
                    <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
                    
                </form>
            </Modal>
        </div>
    );
    
}

// render(<App />, document.getElementById("root"));
export default App;