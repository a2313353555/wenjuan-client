import {FC} from "react";
import Head from "next/head";
import styles from "@/src/styles/Common.module.scss"
import Script from "next/script";
type PropType = {
    title: string
    desc?: string
    css?: string
    js?:string
    children: JSX.Element | JSX.Element[]
}
const PageWrapper: FC<PropType> = (props: PropType) => {
    const {title = '', desc = '', children,js,css} = props
    return <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={desc}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
            <style>
                {css}
            </style>
        </Head>
        <main className={styles.container}>
            {children}
        </main>
        <Script id="gua-js">{js}</Script>
    </>
}
export default PageWrapper