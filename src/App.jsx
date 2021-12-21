import React from "react";

// import freelance from "./data/freelance";
// import internships from "./data/internships";
// import work from "./data/work";

import ExperienceCard from "./components/ExperienceCard";

export default function App() {
  return (
    <div>
        {/* <!-- Navbar --> */}
      <div className="grid grid-cols-2 p-8 items-end"> 
         <a href="/">
            <h1 className="font-bold text-5xl text-orange">
               e
               <span className="text-blueGray ">i</span>
               <span className="text-green ">m</span>
            </h1>
         </a>
      </div>

      <div className="mx-16 md:mx-36 lg:mx-48 xl:mx-80 2xl:mx-112">
      {/* <div className="mx-[15%]"> */}
         <div className="">
            {/* <!-- header --> */}
            <div className="pb-16 flex flex-col items-center ">
               <div className="flex flex-col items-center md:grid md:grid-cols-2 md:content-center md:bg-red-50 container mb-16 mt-16 sm:bg-blue-50 lg:bg-green-50 xl:bg-purple-50 2xl:bg-yellow-50">
                  <img src="/img/face-blue-bg.svg" alt="" className="pb-10 sm:pb-0 scale-100"/>
                  <div className="">
                     <h1 className="pl-0 md:pl-4 font-bold text-darkBlue text-4xl pb-4 lg:text-5xl text-center md:text-left">ethan mooney</h1>
                     <h2 className="pl-0 md:pl-4 font-semibold text-2xl lg:text-3xl leading-relaxed text-center md:text-left sm:block flex flex-col items-center">
                        <span className="text-orange">web developer,</span>
                        <br className="hidden sm:inline"/>
                        <span className="text-blueGray">designer,</span>
                        <br className="hidden md:inline"/>
                        <span className="text-green">photographer</span>
                     </h2>
                  </div>
               </div>

                {/* <!-- scroll button --> */}
               <div className="flex flex-col items-center justify-center">
                  <i className="fas fa-chevron-circle-down text-3xl lg:text-4xl text-green"></i>
               </div>
            </div>
            
            {/* <!-- about --> */}
            <h1 className="font-bold text-orange text-4xl mb-4 lg:text-5xl text-center sm:text-left">about</h1>
            <p className="font-semibold text-base lg:text-xl text-blueGray-700 mb-8">
               Hello! I'm Ethan - a junior computer science student at Oklahoma Christian University. Ever since getting my first
               computer in middle school and learning 
               <span className="text-orange"><a href="https://www.scratch.mit.edu/warrior3" className="hover:text-orange-700"> Scratch</a></span>,
                I've been fascinated by the inner workings and design of technology.
               <br/> <br/>
               Jump to today and I'm in my third year of a computer science degree, about to join my third internship this summer.
               These days, I am focused on UI/UX design and engineering. My core belief is that technology should be accessible for
               everyone, and my goal is to create products that reflect that.
            </p>
            <div className="bg-green-100 rounded-xl space-y-2 px-5 py-5 mb-16">
               <h1 className="font-bold text-gray-100 text-2xl lg:text-3xl">more about me</h1>
               <p className="font-semibold text-base lg:text-xl text-blueGray-700">
                  Beyond the tech world I spend my time on my other hobbies. I love fast cars, so most weekends you'll find me watching
                  F1. I am a film photographer at heart, make sure to check my Instagram to see! And many days of the week you might find
                  me at my local bouldering gym doing my best to make it to the top.
               </p>
            </div>

            {/* <!-- experience --> */}
            <div>
               <h1 className="font-bold text-blueGray text-4xl mb-4 lg:text-5xl text-center sm:text-left">experience</h1>
               <div>
                  <ExperienceCard />
               </div>
            </div>

            {/* <!-- what i'm working on --> */}
            <div>
               <h1 className="font-bold text-green text-4xl mb-4 lg:text-5xl text-center sm:text-left">what i'm <br className="inline md:hidden"/> working on</h1>
               <div>

               </div>
            </div>

            {/* <!-- contact --> */}
            <div className="mb-24">
               <h1 className="font-bold text-darkBlue text-4xl mb-4 lg:text-5xl text-center sm:text-left">contact</h1>
               <div className="bg-green rounded-xl px-3 py-3 sm:px-5 sm:py-5 mb-8">
                  <h2 className="font-semibold text-gray-100 text-md sm:text-lg lg:text-xl mb-4 text-center sm:text-left">
                     <a href="mailto:ethanimooney@gmail.com" className="hover:text-darkBlue">ethanimooney@gmail.com</a>
                  </h2>
                  <h2 className="font-semibold text-gray-100 text-md sm:text-lg lg:text-xl text-center sm:text-left">
                     <a href="https://www.y.at/⛰🌲🚀/" className="hover:text-darkBlue">@ethanimooney</a>
                  </h2>
               </div>
               <div className="flex flex-col items-center md:grid md:grid-cols-2 md:content-center">
                  <img src="/img/face-green-bg.svg" alt="Animated Ethan's face looking up at the contact information." className="scale-100 pb-8 md:pb-0"/>
                  <div className="pl-0 md:pl-4 flex flex-col items-center">
                     <h3 className="font-bold text-green-600 text-2xl lg:text-3xl  mb-4 text-center md:text-left">need some design or development help?</h3>
                     <p className="font-medium text-darkBlue text-lg  lg:text-xl text-center md:text-left">
                        Let me know! I'm always looking for new projects
                        and opporunities between internships.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* <!-- Footer --> */}
      <div className="flex flex-col items-center justify-center pb-8 lg:text-lg">
         <h4 className="font-bold text-darkBlue">
            <span className="text-blueGray-300"><a href="" className="hover:text-blueGray-700">designed </a></span>
            and 
            <span className="text-orange-300"><a href="" className="hover:text-orange-700"> developed </a></span>
            with 
            <span className="text-green-300"><a href="" className="hover:text-green-700"> love</a></span>
         </h4>
         <div className="flex">
            <h4 className="font-bold text-darkBlue pr-1">© ethanimooney 2022</h4>
            <img src="/img/face-gray-bg.svg" alt="A tiny version of animated ethan's face looking at the copyright text"/>
         </div>
      </div>
    </div>
  );
}