import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";

export default function format({ selected, isDropDown, title, children }) {

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <TopBar />
      <NavBar selectedLink={selected} isDropDown={isDropDown}/>
      {children}
      <Footer></Footer>
      <a onClick={scrollToTop} className="scrollup" id="scroll-up">
        <div className="flex flex-col justify-center place-items-center px-[0.8rem] py-[0.4rem]">
          <i className="ri-arrow-drop-up-line mb-[-1.2rem] text-[#fff]"></i>
          <i className="ri-arrow-drop-up-line text-[#fff]" ></i>
        </div>
      </a>
    </div>
  )
}
