import ChatDevPage from "@/pages/ChatDevPage";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function ChatDev() {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t("header.chat")}</title>
        <meta
          name="keywords"
          content="
          Solid, Solid devs, Отдел разработки"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="chatDev" />
      </Head>
      <ChatDevPage />
    </>
  )
}
