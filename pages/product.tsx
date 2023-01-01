import type { NextPage } from "next";
import Layout from "../components/layout";
import Footer from "../components/navigation/footer";
import MobileNavbar from "../components/navigation/mobileNavbar";
import Navbar from "../components/navigation/navbar";
import Product from "../components/product";

const ProductPage: NextPage = () => {
  return (
    <Layout title="Sisikemi | Product">
      <MobileNavbar />
      <Navbar />
      <Product />
      <Footer />
    </Layout>
  );
};

export default ProductPage;
