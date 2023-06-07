import WebServicePage from "@/pages/WebServicePage";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function WebService() {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t("header.our_services")}</title>
        <meta
          name="keywords"
          content="
          Solid, Solid devs, Отдел разработки"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="webServicePage" />
      </Head>
      <WebServicePage />
    </>
  )
}
