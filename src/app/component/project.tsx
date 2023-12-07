import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import P1 from '../../../public/assets/Projects/p1.jpg'
import P2 from '../../../public/assets/Projects/p2.jpg'
import P3 from '../../../public/assets/Projects/p3.jpg'
import P4 from '../../../public/assets/Projects/p4.jpg'
import P5 from '../../../public/assets/Projects/p5.jpg'
import P6 from '../../../public/assets/Projects/p6.jpg'

const Project = () => {
    return(
        <div id='Project'>
            <section className="text-gray-600 body-font bg-gray-200">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Presenting Data Analysis and Web Development projects
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      {/* Projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={P1}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Data Science Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Movies Rating Prediction
            </h1>
            <p className="leading-relaxed line-clamp-2">
            The task I completed during my Data Science internship at CODSOFT. 
            The tasks encompassed a range of data analysis, machine learning and 
            data visualization projects, allowing me to apply and enhance my skills in these areas of Data Science.
            </p>
            <Link target='_blank' href={"https://github.com/raoalihassan0228/CODSOFT/blob/main/task2_codesoft.ipynb"}>
            <p className="leading-relaxed line-clamp-2 text-blue-500 hover:underline">
            View project
            </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={P2}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Data Science Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Car Sales Price Prediction
            </h1>
            <p className="leading-relaxed line-clamp-2">
            The task I completed during my Data Science internship at CODSOFT. 
            The tasks encompassed a range of data analysis, machine learning and 
            data visualization projects, allowing me to apply and enhance my skills in these areas of Data Science.
            </p>
            <Link target='_blank' href={"https://github.com/raoalihassan0228/CODSOFT/blob/main/task4_codesoft.ipynb"}>
            <p className="leading-relaxed line-clamp-2 text-blue-500 hover:underline">
            View project
            </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={P3}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Data Science Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Salary Data Analysis
            </h1>
            <p className="leading-relaxed line-clamp-2">
            The task I completed during my Data Science internship at CODSOFT. 
            The tasks encompassed a range of data analysis, machine learning and 
            data visualization projects, allowing me to apply and enhance my skills in these areas of Data Science.
            </p>
            <Link target='_blank' href={"https://github.com/raoalihassan0228/Salary_data_eda/blob/main/salary_eda.ipynb"}>
            <p className="leading-relaxed line-clamp-2 text-blue-500 hover:underline">
            View project
            </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={P4}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Data Science Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              COVID-19 Virus Analysis
            </h1>
            <p className="leading-relaxed line-clamp-2">
           I conduct an in-depth Exploratory Data Analysis (EDA) on a comprehensive COVID-19 dataset. 
            Through interactive visualizations and data-driven insights, we aim to gain a deeper understanding 
            of the pandemic's trends, patterns, and impact.
            </p>
            <Link target='_blank' href={"https://github.com/raoalihassan0228/Analyzing-the-Pandemic-COVID-19-EDA-Project/blob/main/covid19_eda.ipynb"}>
            <p className="leading-relaxed line-clamp-2 text-blue-500 hover:underline">
            View project
            </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={P5}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Data Science Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Credit Card Fraud Detection
            </h1>
            <p className="leading-relaxed line-clamp-2">
            The task I completed during my Data Science internship at CODSOFT. 
            The tasks encompassed a range of data analysis, machine learning and 
            data visualization projects, allowing me to apply and enhance my skills in these areas of Data Science.
            </p>
            <Link target='_blank' href={"https://github.com/raoalihassan0228/CODSOFT/blob/main/task5_codesoft.ipynb"}>
            <p className="leading-relaxed line-clamp-2 text-blue-500 hover:underline">
            View project
            </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={P6}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Web Development Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Clone Facebook login page
            </h1>
            <p className="leading-relaxed line-clamp-2">
            This project is a clone of the Facebook login page created using HTML, CSS, and Tailwind CSS. 
            Please note that this clone is for educational purposes only and should not be used for any malicious 
            activities, including phishing attempts or deceiving users.          
            </p>
            <Link target='_blank' href={"https://clone-facebook-login-page-eta.vercel.app"}>
            <p className="leading-relaxed line-clamp-2 text-blue-500 hover:underline">
            View project
            </p>
            </Link>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

        </div>
    )
}

export default Project