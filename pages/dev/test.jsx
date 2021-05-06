import React, { useState }  from "react";
import TestModal from "@components/modal/TestModal";


const App = () => {
    const [ modalOpen, setModalOpen ] = useState(false);
    
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }
    return (
        <div>
            <button onClick={ openModal }>모달팝업</button>
            <TestModal open={ modalOpen } close={ closeModal } header="강의 소개">

            {/* Modal.js <main> { props.children } </main>에 내용이 입력된다.  */}
            신우쌤~과 함께하는 스프링 스크립트!<br/>
            최신 JAVA 21 버전을 만나보세요
            </TestModal>
        </div>

    );
}

export default App;
