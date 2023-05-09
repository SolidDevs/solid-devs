import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WebMain from "@/components/webMain/WebMain";
import { mobileMain } from "@/constants/reusableMain";

const MobileDevPage = () => {
  return (
    <>
      <Header />
      <WebMain data={mobileMain} />
      <Footer />
    </>
  );
};

export default MobileDevPage;
