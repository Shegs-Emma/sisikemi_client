import type { NextPage } from "next";
import Layout from "../components/layout";
import Footer from "../components/navigation/footer";
import MobileNavbar from "../components/navigation/mobileNavbar";
import Navbar from "../components/navigation/navbar";
import NewIn from "../components/newIn";

const NewInPage: NextPage = () => {
  return (
    <Layout title="Sisikemi | New In">
      <MobileNavbar />
      <Navbar />
      <NewIn />
      <Footer />
    </Layout>
  );
};

export default NewInPage;
