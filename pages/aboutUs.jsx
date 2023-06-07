import AboutUsPage from "@/pages/AboutUsPage"
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t("header.about")}</title>
        <meta
          name="keywords"
          content="Solid, Solid devs, Отдел разработки"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="aboutPage" />
      </Head>
      <AboutUsPage />
    </>
  )
}

