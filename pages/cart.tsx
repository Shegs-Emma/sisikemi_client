import type { NextPage } from "next";
import Cart from "../components/cart";
import Layout from "../components/layout";
import Footer from "../components/navigation/footer";
import MobileNavbar from "../components/navigation/mobileNavbar";
import Navbar from "../components/navigation/navbar";

const CartPage: NextPage = () => {
  return (
    <Layout title="Sisikemi | Cart">
      <MobileNavbar />
      <Navbar />
      <Cart />
      <Footer />
    </Layout>
  );
};

export default CartPage;
