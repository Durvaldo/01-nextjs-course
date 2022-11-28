import Head from "next/head";

export default function PageTitle({titulo}) {
    return (
        <Head>
            <title>{titulo}</title>
        </Head>
    )
}