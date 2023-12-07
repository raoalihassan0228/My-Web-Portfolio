import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

const Footer=()=>{
    return(
        <div className='bg-blue-100'>
            <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image className="rounded-full w-[90px] border border-gray-100" src={require("../../../public/assets/picture/ali-logo.jpg")}
            width={200}
            height={100}
            alt="Rao Ali Hassan"
            />
      <span className="ml-3 text-xl">Rao Ali Hassan</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2023 Rao Ali Hassan 
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target='_blank' href={"https:/www.facebook.com/raoalihassan4444"} className="text-gray-500 text-3xl">
       <FaFacebook className="hover:text-[#1877f2]" />
      </Link>
      <Link target='_blank' href={"https://www.instagram.com/raoalihassan228"} className="ml-3 text-gray-500 text-3xl">
        <FaInstagramSquare className="hover:text-[#ff62f7]"/>
      </Link>
      <Link target='_blank' href={"https://www.linkedin.com/in/data-scientist-raoalihasssan228"} className="ml-3 text-gray-500 text-3xl">
        <FaLinkedin className="hover:text-[#0077B5]"/>
      </Link>
      <Link target='_blank' href={"https://www.twitter.com/RaoAliHassan228"} className="ml-3 text-gray-500 text-3xl">
       <FaSquareXTwitter className="hover:text-black"/>
      </Link>
      <Link target='_blank' href={"https://www.github.com/raoalihassan0228"} className="ml-3 text-gray-500 text-3xl">
       <FaGithub className="hover:text-black"/>
      </Link>
    </span>
  </div>
</footer>

        </div>
    )
}

export default Footer