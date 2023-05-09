import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WebMain from "@/components/webMain/WebMain";
import { uiMain } from "@/constants/reusableMain";

const UiDesignPage = () => {
  return (
    <>
      <Header />
      <WebMain data={uiMain}/>
      <Footer />
    </>
  );
};

export default UiDesignPage;
