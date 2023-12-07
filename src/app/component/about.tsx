import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Img from '../../../public/assets/picture/ah.jpg'

const About=()=>{
    return(
        <div id='About'>
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
      <h1 className='text-bold text-3xl'>Hello there! I'm Ali Hassan,</h1> 
      <p className="mb-8 leading-relaxed">
    Passionate about Data Science, I am a Data Analyst with a keen eye for 
    analysis . My journey in Data Science has been a thrilling ride 
    filled with challenges and triumphs that have shaped me into the professional I am today.
      </p>
      <p className="mb-8 leading-relaxed">
      Now I'm enrolled in the Bachelor's of science in Data Science (4-Years Degree Program) at The Islamia 
      University of Bahawalpur Pakistan and expanding my skills into full stack web development. 
      I embark on the exciting journey of full stack web development.
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
    )
}

export default About