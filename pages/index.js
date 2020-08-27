import React from "react";
import {Grid, Link} from "@chakra-ui/core";
import fs from "fs";

export default function Home({slugs}) {
    return (
        <Grid>
            {slugs.map( slug => {
                return (
                   <Grid key={slug}>
                       <Link href={"/blog/" + slug}>
                           {slug}
                       </Link>
                   </Grid>
                )
            } )}
        </Grid>
    )
}

export const getStaticProps = async () => {

    const files = fs.readdirSync( "posts" )

    return {
        props: {
            slugs: files.map( filename => filename.replace( ".md", "" ) )
        }
    }
};