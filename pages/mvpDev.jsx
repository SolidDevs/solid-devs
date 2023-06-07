import MvpDevPage from "@/pages/MvpDevPage";
import Head from "next/head";
import { useTranslation } from "react-i18next";
export default function MvpDev() {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t("header.mvp")}</title>
        <meta
          name="keywords"
          content="
          Solid, Solid devs, Отдел разработки"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="mvpPage" />
      </Head>

      <MvpDevPage />
    </>
  );

}
