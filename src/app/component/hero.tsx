"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';
import Img from '../../../public/assets/picture/ah.jpg'

const Hero=()=> {
    return (
      <div>
        <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Web Developer', 'Data Analyst','React|NextJS expert'],
    autoStart: true,
    loop: true,
  }}
/>

      </h1>
      <div className='w-[100px] h-[2px] bg-blue-700'></div>
      <p className="mb-8 leading-relaxed">
      Hi, I&apos;m a Data Analyst graduate certified by Google and Data Science intern, 
      currently expanding my skills into full stack web development and enrolled in the Bachelor&apos;s 
      of Science in Data Science(4-years).
      <br/>
      With around 2 years of hands-on experience in the data field, I specialize in performing diverse data science tasks. My expertise 
      includes developing statistical and Machine Learning models using various techniques and technologies, 
      primarily with Python. As I embark on the exciting journey of full stack web development, I&apos;m passionate 
      about creating seamless and engaging user experiences. If you&apos;re interested in collaboration or have any 
      questions, feel free to reach out using the <span className='font-bold'>Contact</span> button.
      </p>
      <div className="flex justify-center">
        <Link href={'#Contact'}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button> 
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded-lg mx-auto w-[15rem]"
        alt="Rao Ali Hassan"
        width={600}
        height={200}
        src={Img}
      />
    </div>
  </div>
</section>

      </div>
    )
  }

  export default Hero