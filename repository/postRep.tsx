import axios from "axios";

/**
 * ResponseDto
 */
export type PostResponseDto = {
  items: Post[],
  isSuccess : boolean,
}

/**
 * PostVO
 */
export interface Post{
  id : number
  title : string
  content : string
  category : string
  createAt : string
  updateAt : string
}

const isOkResponse = true;
const isErrorResponse = true;

/**
 * Post Service
 */
export async function getPostDateService() : Promise<PostResponseDto>{
  const url = process.env.API_SERVER_BASEURL + "/api/board/all";
  let items: Post[] = [];
  let isSuccess = false;
  try {
    const response = await axios.get(url);
    const data = response.data;
    data.map(
        (item: Post ) => {
          items.push({
            id: item.id,
            title: item.title,
            content: item.content ,
            category: (item.category!= null) ? Object(item.category).name : "",
            createAt: item.createAt,
            updateAt: item.updateAt
          });
        });
    isSuccess = true;
    if(isOkResponse === true)  {
      console.log("================= Response data =====================")
       console.log(data);
       console.log("================ Convert =====================")
       console.log(items);
    }
  }catch (e){
    if(isErrorResponse === true)  console.log(e.response.data)
  }finally {
    return { items, isSuccess }
  }
}


/** 게시글 더미 데이터 **/
export const samplePostData : Post[] = [
  { id : 1, title:'안녕하세요',  content :'첫번째 글입니다', category : '백엔드', createAt :'2021-04-05T02:00:39',updateAt : '2021-04-05T12:41:38'},
  { id : 2, title:'어머나?',     content :'두번째 글입니다', category : '백엔드', createAt :'2021-04-05T02:00:39',updateAt : '2021-04-05T12:41:38'},
  { id : 3, title:'이럴수가',    content :'세번째 글입니다', category : '백엔드', createAt :'2021-04-05T02:00:39',updateAt : '2021-04-05T12:41:38'},
  { id : 4, title:'TypeScript', content :'네번째 글입니다', category : '백엔드', createAt :'2021-04-05T02:00:39',updateAt : '2021-04-05T12:41:38'},
  { id : 5, title:'Java !!',    content :'다섯번째 글입니다', category : '프론트엔드', createAt :'2021-04-05T02:00:39',updateAt : '2021-04-05T12:41:38'},
  { id : 6, title:'내마음은 바다와!!', content :'여섯번째 글입니다', category : '백엔드', createAt :'2021-04-05T02:00:39',updateAt : '2021-04-05T12:41:38'},
  { id : 7, title:'일곱난쟁이', content :'일곱번째 글입니다', category : '백엔드', createAt :'2021-04-05T02:00:39',updateAt : '2021-04-05T12:41:38'},
  { id : 8, title:'하응하응!!', content :'아잉으응 글입니다', category : '백엔드', createAt :'2021-04-05T02:00:39',updateAt : '2021-04-05T12:41:38'},
  { id : 9, title:'자바스크립트!!', content :'오늘은 일요일입니다', category : '백엔드', createAt :'2021-04-05T02:00:39',updateAt : '2021-04-05T12:41:38'},
  { id : 10, title:'자바를 자바!!', content :'신나게 놀자입니다', category : '백엔드', createAt :'2021-04-05T02:00:39',updateAt : '2021-04-05T12:41:38'},
]
