import React from "react";
import {Text} from "@chakra-ui/core";
import fs from 'fs';

const Post = ({slug}) => {
    return <Text>Link: {slug}</Text>
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
    return {
        props: {
            slug
        }
    }
};

export default Post;