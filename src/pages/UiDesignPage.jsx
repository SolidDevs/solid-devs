import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ReusableMainContent from "@/components/webMain/WebMain";
import { uiMain } from "@/constants/reusableMain";

const UiDesignPage = () => {
  return (
    <>
      <Header />
      <ReusableMainContent data={uiMain}/>
      <Footer />
    </>
  );
};

export default UiDesignPage;
