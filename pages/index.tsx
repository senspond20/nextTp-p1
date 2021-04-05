import { GetStaticProps } from 'next'
import {homePostData, Post, Props} from "repository/postRep";
import PostList from "@components/posts/PostList";
import Layout from "@components/layouts/Layout";
import React,{useState} from "react";

// const GreenCloud = styled(Cloud)`
//   color: green;
// `
const Home = ({items} : Props) => {
    const [text, setText] = useState<string>("안녕하세요");
    // 2초후 "안녕하세요" 가 "반갑습니다" 로 변한다.
    setTimeout(() => {
        setText("반갑습니다")
    }, 2000)
    return (
        <Layout title="Home">
            <h1>== {process.env.NEXT_PUBLIC_HOME} ==</h1>
            <h3>{text}</h3>
            <hr/>
            <PostList items={items} isHome={true}/>
        </Layout>
    )
}
export const getStaticProps: GetStaticProps = async () => {
    const version = process.env.REACT_APP_SERVICE_VERSION
    console.log("VERSION", version);
    const items: Post[] = homePostData
    return { props: { items } }
}
export default Home;
