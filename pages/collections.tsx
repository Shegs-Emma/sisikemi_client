import type { NextPage } from "next";
import Collections from "../components/collections";
import Layout from "../components/layout";
import Footer from "../components/navigation/footer";
import MobileNavbar from "../components/navigation/mobileNavbar";
import Navbar from "../components/navigation/navbar";

const CollectionsPage: NextPage = () => {
  return (
    <Layout title="Sisikemi | Collections">
      <MobileNavbar />
      <Navbar />
      <Collections />
      <Footer />
    </Layout>
  );
};

export default CollectionsPage;
