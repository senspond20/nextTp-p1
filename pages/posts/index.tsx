import {GetServerSideProps } from 'next'
import {getPostDateService, PostResponseDto} from "repository/postRep";
import {Fragment} from "react";
import NormalPostList from "@components/posts/NormalPostList";
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
const PostsController = ({ items, isSuccess}: PostResponseDto) => (
    <Layout title="board">
        <Fragment>
            <h1 style={style.title}>Board</h1>
            {
                isSuccess === true
                ? <NormalPostList items={items} isSuccess/>
                : <h3>서버에서 데이터를 가져오는데 실패했습니다</h3>
            }
       </Fragment>
    </Layout>
);

export const getServerSideProps: GetServerSideProps = async () => {
    const data = await getPostDateService();
    return { props: data }
}

export default PostsController;



