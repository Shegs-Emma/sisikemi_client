import type { NextPage } from "next";
import Landing from "../components/landing";
import Layout from "../components/layout";
import Footer from "../components/navigation/footer";
import MobileNavbar from "../components/navigation/mobileNavbar";
import Navbar from "../components/navigation/navbar";

const Home: NextPage = () => {
  return (
    <Layout title="Sisikemi | Landing">
      <MobileNavbar />
      <Navbar />
      <Landing />
      <Footer />
    </Layout>
  );
};

export default Home;
