import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ReusableMainContent from "@/components/webMain/WebMain";
import { mvpMain } from "@/constants/reusableMain";

const MvpDevPage = () => {
  return (
    <>
      <Header />
      <ReusableMainContent data={mvpMain} />
      <Footer />
    </>
  );
};

export default MvpDevPage;
