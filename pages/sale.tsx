import type { NextPage } from "next";
import Layout from "../components/layout";
import Footer from "../components/navigation/footer";
import MobileNavbar from "../components/navigation/mobileNavbar";
import Navbar from "../components/navigation/navbar";
import Sale from "../components/sale";

const SalePage: NextPage = () => {
  return (
    <Layout title="Sisikemi | Sale Page">
      <MobileNavbar />
      <Navbar />
      <Sale />
      <Footer />
    </Layout>
  );
};

export default SalePage;
