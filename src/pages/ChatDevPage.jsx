import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ReusableMainContent from "@/components/webMain/WebMain";
import { chatMain } from "@/constants/reusableMain";

const ChatDevPage = () => {
  return (
    <>
      <Header />
      <ReusableMainContent data={chatMain} />
      <Footer />
    </>
  );
};

export default ChatDevPage;
