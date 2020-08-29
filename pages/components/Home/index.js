import React, {useEffect} from "react";
import {Grid, Link, Text} from "@chakra-ui/core";
import Header from "../home-page/Header";

export default function Home(props) {

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
            <Header></Header>
            <Grid p={4}>
                {props.slugs.map( slug => {
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

[]