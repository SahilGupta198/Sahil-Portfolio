import { useState } from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from '../assets/menu-icon.svg'
import closeIcon from '../assets/close-icon.svg'
import { HiDownload } from 'react-icons/hi'
import logo from '../assets/favLogo.png'
import menuImage from '../assets/gradientProfile.jpg'
import { RiHome3Line, RiUser3Line, RiFunctionLine, RiStackLine } from 'react-icons/ri'

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-main " : ""
        } hover:text-main transition duration-500 `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const resumeURL = 'http://localhost:3000/resumeCopy.pdf'

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-dark md:bg-transparent shadow-lg shadow-black md:backdrop-blur-sm md:backdrop-brightness-50";

  // for resume
  const downloadFile = () => {
    const fileName = resumeURL.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = resumeURL;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-4`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <img className="w-10 md:w-14 shadow-md shadow-main rounded-md" src={logo} alt="logo" />

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between items-center gap-10 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Services"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <button className=" bg-main text-dark font-playfair tracking-tighter rounded-sm shadow-lg shadow-black hover:scale-90 transition duration-500 flex flex-row items-center px-6 py-2" onClick={downloadFile}>Resume<HiDownload className="text-lg ml-0.5" /></button>
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src={menuIcon} />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <motion.div
            className="fixed right-0 bottom-0 h-full bg-dark shadow-2xl rounded-sm shadow-black w-[300px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}>

            {/* CLOSE ICON */}
            <div className="flex justify-end px-10 py-6">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src={closeIcon} className="" />
              </button>
            </div>

            {/* profile */}
            <div className="flex flex-col items-center mb-10">
              <img src={menuImage} alt="menu" className="w-24 mb-4 rounded-md shadow-md shadow-black" />
              <h3 className="font-playfair text-xl ">Sahil Gupta</h3>
              <h6 className="text-sm opacity-70">Frontend Developer</h6>

            </div>
            <hr className="bg-light/20" />
            {/* menu */}
            <div className="flex flex-col items-start mx-auto ml-4 mt-10 gap-10 text-2xl">
              {/* MENU ITEMS */}
              <div className="flex justify-center items-center gap-2">
                <RiHome3Line className="text-main" />
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className="flex justify-center items-center gap-2">
                <RiUser3Line className="text-main" />
                <Link
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className="flex justify-center items-center gap-2">
                <RiFunctionLine className="text-main" />
                <Link
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className="flex justify-center items-center gap-2">
                <RiStackLine className="text-main" />
                <Link
                  page="Services"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <button className=" bg-main text-dark font-bold rounded-sm shadow-lg shadow-black hover:scale-90 transition duration-500 flex flex-row items-center mt-12 px-4 py-2" onClick={downloadFile}>Resume<HiDownload className="text-2xl ml-0.5" /></button>
            </div>

          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
