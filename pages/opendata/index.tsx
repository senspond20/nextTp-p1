// import {GetServerSideProps } from 'next'
import {Fragment} from "react";
import Layout from "@components/layouts/Layout";

const style ={
    title :{textAlign:'center' as const},
}

/**
 * Posts View를 랜더링 한다.
 * @param items
 * @param isSuccess
 * @constructor
 */
const Handler = () => (

    <Layout title="board">
        <Fragment>
            <h1 style={style.title}>Board</h1>

        </Fragment>
    </Layout>
);

// export const getServerSideProps: GetServerSideProps = async () => {
//     const data = '';
//     return { props: data }
// }

export default Handler;



