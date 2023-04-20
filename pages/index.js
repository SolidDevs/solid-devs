import Head from "next/head"
import HomePage from "@/pages/HomePage"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Solid devs</title>
        <meta
          name="keywords"
          content="
          Solid, Solid devs, Отдел разработки"
        />
        <link rel="icon" href="/solid-logo.svg" />
      </Head>
      <HomePage />
    </div>
  )
}
