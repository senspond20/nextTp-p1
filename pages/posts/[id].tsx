import { GetStaticProps, GetStaticPaths } from 'next'

import {Post, samplePostData} from "repository/postRep";
import Layout from "@components/layouts/Layout";

type Props = {
    item?: Post
    errors?: string
}
// @Autowired
const repository = samplePostData;

const StaticPropsDetail = ({ item, errors }: Props) => {
    if (errors) {
        return (
            <Layout title="Post">
                <p>
                    <span style={{ color: 'red' }}>Error:</span> {errors}
                </p>
            </Layout>
        )
    }
    return (
        <Layout
            title={`${
                item ? item.title : 'User Detail'
            } | Next.js + TypeScript Example`}
        >
            {/*{item && <ListDetail item={item} />}*/}
        </Layout>
    )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on users
    const paths = repository.map((post) => ({
        params: { id: post.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const id = params?.id
        const item = repository.find((data) => data.id === Number(id))
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return { props: { item } }
    } catch (err) {
        return { props: { errors: err.message } }
    }
}
