import '../styles/global.css';
import customTheme from "../styles/themes";
import React from "react";
import {ThemeProvider, CSSReset} from "@chakra-ui/core";
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <ThemeProvider theme={customTheme}>
                    <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
