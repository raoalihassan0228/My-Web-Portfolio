import React from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";

const Skill = () => {
  return (
    <div id="Skill" className="bg-blue-50">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              SKILLS
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            {/* Skills 1*/}
            <div className="p-4 w-[100%] md:w-1/4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-indigo-500 h-1 w-[100%]"></div>
                  </div>
                  <p className="font-bold text-indigo-500 text-right">100%</p>
                </div>
              </div>
            </div>

            {/* Skills 2*/}
            <div className="p-4 w-[100%] md:w-1/4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-indigo-500 h-1 w-[100%]"></div>
                  </div>
                  <p className="font-bold text-indigo-500 text-right">100%</p>
                </div>
              </div>
            </div>

            {/* Skills 3*/}
            <div className="p-4 w-[100%] md:w-1/4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Tailwind CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-indigo-500 h-1 w-[100%]"></div>
                  </div>
                  <p className="font-bold text-indigo-500 text-right">100%</p>
                </div>
              </div>
            </div>

            {/* Skills 4*/}
            <div className="p-4 w-[100%] md:w-1/4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    JavaScript/Typescript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-indigo-500 h-1 w-[95%]"></div>
                  </div>
                  <p className="font-bold text-indigo-500 text-right">95%</p>
                </div>
              </div>
            </div>

            {/* Skills 5*/}
            <div className="p-4 w-[100%] md:w-1/4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    ReactJs | NextJs
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-indigo-500 h-1 w-[80%]"></div>
                  </div>
                  <p className="font-bold text-indigo-500 text-right">90%</p>
                </div>
              </div>
            </div>

            {/* Skills 6*/}
            <div className="p-4 w-[100%] md:w-1/4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    NodeJs
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-indigo-500 h-1 w-[95%]"></div>
                  </div>
                  <p className="font-bold text-indigo-500 text-right">95%</p>
                </div>
              </div>
            </div>

            {/* Skills 7*/}
            <div className="p-4 w-[100%] md:w-1/4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    ExpressJs | EJS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-indigo-500 h-1 w-[95%]"></div>
                  </div>
                  <p className="font-bold text-indigo-500 text-right">95%</p>
                </div>
              </div>
            </div>

            {/* Skills 8*/}
            <div className="p-4 w-[100%] md:w-1/4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Sanity
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-indigo-500 h-1 w-[95%]"></div>
                  </div>
                  <p className="font-bold text-indigo-500 text-right">95%</p>
                </div>
              </div>
            </div>

            {/* Skills 9*/}
            <div className="p-4 w-[100%] md:w-1/4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    SQL
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-indigo-500 h-1 w-[100%]"></div>
                  </div>
                  <p className="font-bold text-indigo-500 text-right">100%</p>
                </div>
              </div>
            </div>

            {/* Skills 10*/}
            <div className="p-4 w-[100%] md:w-1/4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Bootstrap
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-indigo-500 h-1 w-[100%]"></div>
                  </div>
                  <p className="font-bold text-indigo-500 text-right">100%</p>
                </div>
              </div>
            </div>

            {/* Skills 11*/}
            <div className="p-4 w-[100%] md:w-1/4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Shadcn UI
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-indigo-500 h-1 w-[100%]"></div>
                  </div>
                  <p className="font-bold text-indigo-500 text-right">100%</p>
                </div>
              </div>
            </div>

            {/* Skills 12*/}
            <div className="p-4 w-[100%] md:w-1/4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Git
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-indigo-500 h-1 w-[100%]"></div>
                  </div>
                  <p className="font-bold text-indigo-500 text-right">100%</p>
                </div>
              </div>
            </div>

            {/* Skills 13*/}
            <div className="p-4 w-[100%] md:w-1/4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Data Analysis
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-indigo-500 h-1 w-[90%]"></div>
                  </div>
                  <p className="font-bold text-indigo-500 text-right">90%</p>
                </div>
              </div>
            </div>

            {/* Skills 14*/}
            <div className="p-4 w-[100%] md:w-1/4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Machine Learning
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-indigo-500 h-1 w-[90%]"></div>
                  </div>
                  <p className="font-bold text-indigo-500 text-right">90%</p>
                </div>
              </div>
            </div>

            {/* Skills 15*/}
            <div className="p-4 w-[100%] md:w-1/4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Deep Learning
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-indigo-500 h-1 w-[80%]"></div>
                  </div>
                  <p className="font-bold text-indigo-500 text-right">80%</p>
                </div>
              </div>
            </div>

            {/* Skills 16*/}
            <div className="p-4 w-[100%] md:w-1/4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Python
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-indigo-500 h-1 w-[90%]"></div>
                  </div>
                  <p className="font-bold text-indigo-500 text-right">90%</p>
                </div>
              </div>
            </div>

            {/* Skills 17*/}
            <div className="p-4 w-[100%] md:w-1/4">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    C++
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-indigo-500 h-1 w-[85%]"></div>
                  </div>
                  <p className="font-bold text-indigo-500 text-right">85%</p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
