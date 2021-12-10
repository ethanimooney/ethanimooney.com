import React from "react";

export default function App() {
  return (
    <div>
      <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <h1 className="mt-6 text-2xl font-headline tracking-light font-extrabold text-brand sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              eim
            </h1>
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
              src="/img/michael-no.gif"
              alt="Woman workcationing on the beach"
            />
            <h1 className="mt-6 text-2xl font-headline tracking-light font-semibold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              Under Construction!
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Currently overhauling the site! I want to showcase my skills the best I can, so I'm hard at work learning a few new
              front-end technologies so that I can blow you away ... or at least try to
            </p>
            <div className="mt-4 space-x-6 sm:mt-6 flex-auto justify-center">
              <a
                className="inline-block px-5 py-3 rounded-lg transform transition 
                          bg-twitter hover:bg-twitter-light hover:-translate-y-0.5 
                          focus:ring-twitter-light focus:ring-opacity-50 focus:outline-none 
                          focus:ring focus:ring-offset-2 active:bg-twitter-dark uppercase 
                          tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
                href="https://www.twitter.com/ethanimooney"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                className="inline-block px-5 py-3 rounded-lg transform transition 
                          bg-instagram hover:bg-instagram-light hover:-translate-y-0.5 
                          focus:ring-instagram-light focus:ring-opacity-50 focus:outline-none 
                          focus:ring focus:ring-offset-2 active:bg-instagram-dark uppercase 
                          tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
                href="https://www.instagram.com/ethanimooney"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                className="inline-block px-5 py-3 rounded-lg transform transition 
                          bg-linkedin hover:bg-linkedin-light hover:-translate-y-0.5 
                          focus:ring-linkedin-light focus:ring-opacity-50 focus:outline-none 
                          focus:ring focus:ring-offset-2 active:bg-linkedin-dark uppercase 
                          tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
                href="https://www.linkedin.com/in/ethanimooney"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                className="inline-block px-5 py-3 rounded-lg transform transition 
                          bg-github hover:bg-github-light hover:-translate-y-0.5 
                          focus:ring-github-light focus:ring-opacity-50 focus:outline-none 
                          focus:ring focus:ring-offset-2 active:bg-github-dark uppercase 
                          tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
                href="https://www.github.com/ethanimooney"
              >
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:block 2xl:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/img/michael-no.gif"
            alt="Woman workcationing on the beach"
          />
        </div>
      </div>
    </div>
  );
}