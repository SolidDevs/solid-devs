import MobileDevPage from "@/pages/MobileDevPage";
import { useTranslation } from "react-i18next";
import Head from "next/head";

export default function MobileDev() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("header.mobile")}</title>
        <meta
          name="keywords"
          content="
          Solid, Solid devs, Отдел разработки"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="mobilePage" />
      </Head>
      <MobileDevPage />
    </>
  )
}
