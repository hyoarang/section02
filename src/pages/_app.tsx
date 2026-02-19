import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GlobalLayout from "@/component/global-layout";
import { ReactNode } from "react";
import type {NextPage} from "next";

type NextPageWithLayout = NextPage & {
  getLayout: (page:ReactNode) => ReactNode
}

export default function App({ Component, pageProps }: AppProps & {Component:NextPageWithLayout}) {
  const getLayout = Component.getLayout ?? ((page:ReactNode)=>{return page});
  return (
    <GlobalLayout>
      
      {getLayout(<Component {...pageProps}></Component>)}
      
    </GlobalLayout>
  )
}