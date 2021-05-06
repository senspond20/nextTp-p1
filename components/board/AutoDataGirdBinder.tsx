import React, { Fragment }  from "react";
const styleUl ={
    center : {
        margin : '0 auto',
        textAlign:'center' as const
    },
    form :{
        border : '1px solid red',
        padding : '15px'
    }
}
const AutoDataGirdBinder = (data : []) =>{

    let itemList = (data !=null) ? data.map((item : any, index : number)=>
        (
            <tr key={index}>
                {Object.keys(item).map(k => <td>{item[k]}</td> )}
            </tr>
        )
    ) : null

    return(
        <Fragment>
        {
            (data == null) 
            ?
            <table style={styleUl.center}>
                <thead>
                    <tr>
                        {Object.keys(data[0]).map(k => <th>{k}</th> )}
                    </tr>
                </thead>
                <tbody>
                        {itemList}
                </tbody>
            </table>
            :
            <table style={styleUl.center}>
                <thead>
                    <tr>                   
                    </tr>
                </thead>
                <tbody>
                       <tr><td colSpan={6}>데이터가 존재하지 않습니다</td></tr>
                </tbody>
            </table>
        }
        </Fragment>
    )
}

export default AutoDataGirdBinder;