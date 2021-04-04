import { GetStaticProps } from 'next'
import {Post, Props, samplePostData} from "repository/postRep";
import PostList from "@components/posts/PostList";
import Layout from "@components/layouts/Layout";

const WithStaticProps = ({ items}: Props) => (
    <Layout title="board">
        <h1>Board</h1>
        <PostList items={items} isHome={false}/>
    </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
    const items: Post[] = samplePostData
    return { props: { items } }
}

export default WithStaticProps;