import React,{useState} from 'react'
import { FcSupport,FcDocument } from "react-icons/fc";
import { ImKeyboard} from "react-icons/im";
import { IoIosAddCircleOutline }  from "react-icons/io";
import {GoStar} from "react-icons/go";
const test = ()=>{
    alert('추가')
}
const style = {
    Star : {
        fontSize : '30',
        color : '#ddd',
    },
    StarActive :{
        fontSize : '30',
        color : 'gold'
    }
}


const App = ()=>{
    const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = (index: number) => setHoverRating(index);
  // 마우스가 별 위에 올라가면 스테이트를 변경.
  const onMouseLeave = () => setHoverRating(0);
  // 마우스가 별 밖으로 나가면 스테이트를 0으로 변경.
  const onSaveRating = (index: number) => setRating(index);
  // 클릭시, 별 인덱스를 스테이트에 저장.
//https://velog.io/@hwanieee/%EB%B3%84%EC%A0%90-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
//https://www.npmjs.com/package/react-star-rating-component
    return(
        <div>
            <FcSupport size={40} color={'blue'}/>
            
            <IoIosAddCircleOutline size={35} cursor={'pointer'} onClick={test}/>
            <FcDocument/>

            <div>이 사람의 외모 점수는 ?</div>
            <img src='https://images.unsplash.com/photo-1510832198440-a52376950479?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1348&q=80' alt='' width={'500px'} />
            <div>별점주기<ImKeyboard size={15} color={'blue'}/></div>
            
            <div>
                <GoStar style={style.StarActive}/>
                <GoStar style={style.StarActive}/>
                <GoStar style={style.Star}/>
                <GoStar style={style.Star}/>
                <GoStar style={style.Star}/>
            </div>
            

        </div>
    )
}

export default App;