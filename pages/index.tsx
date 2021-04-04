import { GetStaticProps } from 'next'
import {homePostData, Post, Props} from "repository/postRep";
import PostList from "@components/posts/PostList";
import Layout from "@components/layouts/Layout";


const Home = ({items} : Props) => {
    return (
        <Layout title="Home">
            <PostList items={items} isHome={true}/>
        </Layout>
    )
}
export const getStaticProps: GetStaticProps = async () => {
    const items: Post[] = homePostData
    return { props: { items } }
}
export default Home;