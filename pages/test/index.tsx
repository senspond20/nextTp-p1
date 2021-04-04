import React from "react";
import Link from "next/Link";
import axios from 'axios'
import Layout from "@components/layouts/Layout";
import TextLogo from "@components/svg/TextLogo";

const Index = (props: { data: { show: any; }[]; }) => (
    <Layout>
        <p>Hello, Next JS</p>
        <h2>
            홈 화면
        </h2>

        <ul>
            {props.data.map(({show}) => (
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?title=${show.title}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
        <TextLogo/>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.data;
    console.log(`Show data fetched. Count: ${data.length}`);
    return {
        data: data
    }
};

export default Index