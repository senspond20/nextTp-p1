import { GetStaticProps } from 'next'
import {homePostData, Post, Props} from "repository/postRep";
import PostList from "@components/posts/PostList";
import Layout from "@components/layouts/Layout";
import Cloud from "@components/svg/Cloud";
import styled from "styled-components";
import TextLogo from "@components/svg/TextLogo";

// const GreenCloud = styled(Cloud)`
//   color: green;
// `
const Home = ({items} : Props) => {
    return (
        <Layout title="Home">
            <TextLogo/>
            <PostList items={items} isHome={true}/>
        </Layout>
    )
}
export const getStaticProps: GetStaticProps = async () => {
    const items: Post[] = homePostData
    return { props: { items } }
}
export default Home;