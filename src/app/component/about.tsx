import Image from "next/image";
import Link from "next/link";
import React from "react";
import Img from "../../../public/assets/picture/ah.jpg";

const About = () => {
  return (
    <div id="About">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-lg mx-auto w-[250px] h-[350px]"
              alt="hero"
              width={300}
              height={200}
              src={Img}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <h1 className="text-bold text-3xl">
              Hello there! I&apos;m Ali Hassan,
            </h1>
            <p>
             I&apos;m a professional
              full-stack developer specializing in the MERN stack. I bring
              expertise to crafting{" "}
              <span className="font-semibold">
                custom, static, and dynamic business websites
              </span>{" "}
              that prioritize user experience and functionality.{" "}
            </p><br />
            <p>
              Desired to <span className="font-semibold">conceptualize, build, and implement </span>
              innovative web solutions that meet your unique business needs. I&apos;m
              also a <span className="font-semibold">strong team player and effective communicator</span>, always
              collaborating closely with clients to ensure project success.
            </p>
            <p className="mb-8 leading-relaxed">
              Currently I&apos;m enrolled in the Bachelor&apos;s of science in Data
              Science (4-Years Degree Program) at The Islamia University of
              Bahawalpur Pakistan and expanding my skills into full stack web
              development. I embark on the exciting journey of full stack web
              development.
            </p>
            <div className="flex justify-center">
              <a href="/assets/cv/alicv.pdf">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
