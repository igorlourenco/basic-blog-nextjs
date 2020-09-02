import React, {useEffect} from "react";
import fs from "fs";

export default function Main({slugs}) {
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
            <div>
                {slugs.map( slug => {
                    return (
                        <div key={slug}>
                            <a href={"/blog/" + slug}>
                                {slug}
                            </a>
                        </div>
                    )
                } )}
            </div>
        </>
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