import type { NextPage } from "next";
import AllProducts from "../components/allProducts";
import Layout from "../components/layout";
import Footer from "../components/navigation/footer";
import MobileNavbar from "../components/navigation/mobileNavbar";
import Navbar from "../components/navigation/navbar";

const AllProductPage: NextPage = () => {
  return (
    <Layout title="Sisikemi | All Products">
      <MobileNavbar />
      <Navbar />
      <AllProducts />
      <Footer />
    </Layout>
  );
};

export default AllProductPage;
