import '../styles/globals.css'
import React from "react";
import {ThemeProvider} from "@chakra-ui/core";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
