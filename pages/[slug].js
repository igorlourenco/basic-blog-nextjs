import React from "react";
import {Text, Grid} from "@chakra-ui/core";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const Post = ({contents, data}) => {
    return (
        <>
            <Head>
                <title>{data.title}</title>
                <meta title="description" content={data.description}/>
            </Head>
            <Grid>
                <Text>{contents}</Text>
            </Grid>
        </>
    )
};

export const getStaticPaths = async () => {

    const files = fs.readdirSync( 'posts' );

    console.log( "files: ", files )

    const paths = files.map( filename => ({
        params: {
            slug: filename.replace( ".md", "" )
        }
    }) );

    console.log( 'paths: ', paths );

    return {
        paths,
        fallback: false
    }
};

export const getStaticProps = async ({params: {slug}}) => {

    const markdownWithMetadata = fs.readFileSync( path.join( 'posts', slug + '.md' ) ).toString();

    const parsedMarkdown = matter( markdownWithMetadata );

    return {
        props: {
            contents: parsedMarkdown.content,
            data: parsedMarkdown.data
        }
    }
};

export default Post;