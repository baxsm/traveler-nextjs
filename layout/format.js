import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";

export default function format({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <TopBar></TopBar>
      <NavBar></NavBar>
      {children}
      <Footer></Footer>
    </div>
  )
}
