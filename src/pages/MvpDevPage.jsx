import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WebMain from "@/components/webMain/WebMain";
import { mvpMain } from "@/constants/reusableMain";

const MvpDevPage = () => {
  return (
    <>
      <Header />
      <WebMain data={mvpMain} />
      <Footer />
    </>
  );
};

export default MvpDevPage;
