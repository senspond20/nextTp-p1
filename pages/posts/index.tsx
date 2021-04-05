import {/* GetStaticProps,*/ GetServerSideProps } from 'next'
import {Post, Props, samplePostData} from "repository/postRep";
import PostList from "@components/posts/PostList";
import Layout from "@components/layouts/Layout";
import axios from "axios";

const WithStaticProps = ({ items}: Props) => {
    return(
        <Layout title="board">
            <h1>Board</h1>
            <PostList items={items} isHome={false}/>
        </Layout>
    )
}
export const getServerSideProps: GetServerSideProps = async () => {
    const res = await axios.get("http://senspond.iptime.org:8083/api/board/all");
    const data = res.data;
    console.log(data)
    const items: Post[] = samplePostData
    return { props: { items } }
}
/*
export const getStaticProps: GetStaticProps = async () => {
    const items: Post[] = samplePostData
    return { props: { items } }
}*/

export default WithStaticProps;