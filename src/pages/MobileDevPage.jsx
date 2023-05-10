import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ReusableMainContent from "@/components/webMain/WebMain";
import { mobileMain } from "@/constants/reusableMain";

const MobileDevPage = () => {
  return (
    <>
      <Header />
      <ReusableMainContent data={mobileMain} />
      <Footer />
    </>
  );
};

export default MobileDevPage;
