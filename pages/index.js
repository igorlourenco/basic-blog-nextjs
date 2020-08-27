import React, { useEffect } from "react";
import {Grid, Link} from "@chakra-ui/core";
import fs from "fs";

export default function Home({slugs}) {

    useEffect(()=>{
        if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
                if (!user) {
                    window.netlifyIdentity.on("login", () => {
                        document.location.href = "/admin/";
                    });
                }
            });
        }
    },[])

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