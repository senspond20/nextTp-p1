import React,{useState} from "react";
// import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import  LoginForm  from '@components/auth/LoginForm'
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
                <LoginForm/>
            </Modal>
        </div>
    );
    
}

// render(<App />, document.getElementById("root"));
export default App;