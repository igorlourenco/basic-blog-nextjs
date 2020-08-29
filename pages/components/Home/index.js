import React, {useEffect} from "react";
import {Grid, Link, Text} from "@chakra-ui/core";

export default function Home({slugs}) {

    useEffect( () => {
        if (window.netlifyIdentity) {
            window.netlifyIdentity.on( "init", user => {
                if (!user) {
                    window.netlifyIdentity.on( "login", () => {
                        document.location.href = "/admin/";
                    } );
                }
            } );
        }
    }, [] )

    return (
        <>
            <Grid p={4}>
                {slugs.map( slug => {
                    return (
                        <Grid key={slug}>
                            <Link href={"/blog/" + slug}>
                                <Text>{slug}</Text>
                            </Link>
                        </Grid>
                    )
                } )}
            </Grid>
        </>
    )
}