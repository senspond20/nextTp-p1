import React from 'react';
import {Router, withRouter } from 'next/router';

const styles = {
    history: {
        color: 'red',
    },
};
type props ={
    router : Router
}
const History = ({router}: props) =>{

    return (
        <h2 style={styles.history}>
            {router.pathname.replace("/","")}
        </h2>
    );
    // return router.query.history ? (
    //     <h2 style={styles.history}>
    //         {router.query.history}
    //     </h2>
    // ) : null;
}
export default withRouter(History);