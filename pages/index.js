import React from "react";
import Home from "./components/Home";
import fs from "fs";

export default function Main({slugs}) {
   return(
       <Home slugs={slugs}/>
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