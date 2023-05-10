import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import CarierInfoBlock from "@/components/carierInfoBlock/CarierInfoBlock";

const CarierPage = () => {
  return (
    <>
      <Header/>
      <CarierInfoBlock variant='team' />
      <CarierInfoBlock variant='practicum' />
      <Footer />
    </>
  );
};
export default CarierPage;
