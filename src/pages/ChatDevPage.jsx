import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WebMain from "@/components/webMain/WebMain";
import { chatMain } from "@/constants/reusableMain";

const ChatDevPage = () => {
  return (
    <>
      <Header />
      <WebMain data={chatMain} />
      <Footer />
    </>
  );
};

export default ChatDevPage;
