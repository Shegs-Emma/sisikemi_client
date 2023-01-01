import { FC } from "react";
import Layout from "../components/layout";
import Footer from "../components/navigation/footer";
import MobileNavbar from "../components/navigation/mobileNavbar";
import Navbar from "../components/navigation/navbar";
import Rtw from "../components/rtw";

const RtwPage: FC = () => {
  return (
    <Layout title="Sisikemi | RTW">
      <MobileNavbar />
      <Navbar />
      <Rtw />
      <Footer />
    </Layout>
  );
};

export default RtwPage;
