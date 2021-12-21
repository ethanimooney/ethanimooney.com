import React from "react";
import internships from "./data/internships";
import work from "./data/work";
import freelance from "./data/freelance";



import ExperienceEntryCard from "./ExperienceEntryCard";

export default function ExperienceCard() {
  return (
    <div>
      <div className="bg-blueGray rounded-t-3xl px-10 py-4 flex flex-col justify-center align-middle items-center text-gray-100 
                      text-xl font-bold space-y-2 sm:flex-row sm:space-y-0">
        <button className="hover:bg-blueGray-600 px-4 py-1 rounded-lg focus:bg-blueGray-600 font-bold">
          Work
        </button>
        <button className="hover:bg-blueGray-600 px-4 py-1 rounded-lg focus:bg-blueGray-600 font-bold">
          Internship
        </button>
        <button className="hover:bg-blueGray-600 px-4 py-1 rounded-lg focus:bg-blueGray-600 font-bold">
          Freelance
        </button>
      </div>

      <div className="bg-gray-200 rounded-b-3xl mb-16 p-5 ">
        <div className="space-y-5" id="internships">
          {internships.map((entry) => (
            <ExperienceEntryCard entry={entry} key={entry.title} />
          ))}
        </div>

        <div className="space-y-5 hidden" id="work">
          {work.map((entry) => (
            <ExperienceEntryCard entry={entry} key={entry.title} />
          ))}
        </div>

        <div className="space-y-5 hidden" id="freelance">
          {freelance.map((entry) => (
            <ExperienceEntryCard entry={entry} key={entry.title} />
          ))}
        </div>
        
      </div>
    </div>
  );
}