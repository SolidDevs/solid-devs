import CarierPage from "@/pages/CarierPage"
import Head from "next/head"
import { useTranslation } from "react-i18next";

export default function Carier() {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t("header.career")}</title>
        <meta
          name="keywords"
          content="
  Solid, Solid devs, Отдел разработки"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="careerPage" />
      </Head>
      <CarierPage />
    </>
  )


}
