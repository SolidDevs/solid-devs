import UiDesignPage from "@/pages/UiDesignPage";
import { useTranslation } from "react-i18next";
import Head from "next/head";
export default function UiDesign() {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t("header.ux-ui")}</title>
        <meta
          name="keywords"
          content="
          Solid, Solid devs, Отдел разработки"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="uiPage" />
      </Head>
      <UiDesignPage />
    </>)
}
