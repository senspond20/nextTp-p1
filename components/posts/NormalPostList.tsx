import React,{Fragment} from "react";
import {PostResponseDto} from "repository/postRep";

const style ={
    ulWrapper: {
        display :'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexWrap : 'wrap-reverse' as const
        // flexDirection: 'row'
    },
    liWrapper : {
      display :'flex',
      justifyContent : 'center',
      alignItems : 'center',
      border : '1px solid #eee',
      borderRadius: '4px',
      padding: '60px',
      Width: '400px',
      margin: '10px 20px',
      height: '80px'
    },
    itemId :{
        color:'red'
    }
}

const NormalPostList = ({items}: PostResponseDto) => {
    return (
        <Fragment>
            <ul style={style.ulWrapper}>
                {
                    /* items 이 비었을 경우 <데이터가 없습니다> 처리 */
                }
                {items.map((item) => (
                    <li key={item.id} style={style.liWrapper}>
                        <div>
                            <p style={style.itemId}>{item.id}</p>
                            <p><span>title : </span>{item.title}</p>
                            <p><span>content : </span>{item.content}</p>
                            <p><span>category : </span>{item.category}</p>
                            <p><span>createAt : </span>{item.createAt}</p>
                            <p><span>updateAt : </span>{item.updateAt}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
};

export default NormalPostList;