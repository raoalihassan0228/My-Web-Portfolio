import Image from "next/image";
import Link from "next/link";
import { FaBeer } from 'react-icons/fa';
import { FcDownload } from "react-icons/fc";

const Navbar = () => {
  return (
    <div className="bg-gray-100 z-50 sticky top-0">
      <header className="text-gray-600 body-font bg-gray-100">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image className="rounded-full w-[70px]" src={require("../../../public/assets/picture/hassan.jpg")}
            width={200}
            height={100}
            alt="Rao Ali Hassan"
            />
            <span className="ml-3 text-xl font-serif">
              Rao Ali Hassan
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
            <Link href={"#About"} className="mr-5 hover:text-gray-900">About me</Link>
            <Link href={"#Skill"} className="mr-5 hover:text-gray-900">Skills</Link>
            <Link href={"#Project"} className="mr-5 hover:text-gray-900">Projects</Link>
            <Link href={"#Contact"} className="mr-5 hover:text-gray-900">Contact</Link>
          </nav>
          <a href="/assets/cv/alicv.pdf">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Download CV
            <FcDownload />
          </button>
          </a>
        </div>
      </header>
    </div>
  );
};


export default Navbar