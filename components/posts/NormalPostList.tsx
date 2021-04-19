import {Fragment} from "react";
import {PostResponseDto} from "repository/postRep";
import Link from "next/Link";
const style ={
    ulWrapper : { display :'flex', justifyContent : 'center', alignItems : 'center', flexWrap : 'wrap-reverse' as const  },
    liWrapper : { display :'flex', justifyContent : 'center', alignItems : 'center',   border : '1px solid #eee',
                  borderRadius: '4px',  padding : '60px',  Width: '400px',  margin: '10px 20px',  height: '80px'  },
    itemId : {  color:'red'  },
    linkStyle : { cursor :'pointer'}
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
                        <Link href="/posts/[id]" as={`/posts/${item.id}`} >
                            <div style={style.linkStyle}>
                                <p style={style.itemId}>{item.id}</p>
                                <p><span>title : </span>{item.title}</p>
                                <p><span>content : </span>{item.content}</p>
                                <p><span>category : </span>{item.category}</p>
                                <p><span>createAt : </span>{item.createAt}</p>
                                <p><span>updateAt : </span>{item.updateAt}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
};

export default NormalPostList;