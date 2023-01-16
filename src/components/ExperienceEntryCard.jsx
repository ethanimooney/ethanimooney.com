import React from "react";



export default function ExperienceEntryCard({entry}) {
  var buttons;

  if(entry.links != null) {
    buttons = 
    <div className="flex flex-row space-x-4"> 
      {entry.links.map((link) => 
        <a href={link.link} target="_blank" className="bg-blueGray-600 text-gray-100 font-bold text-sm px-2 py-1 rounded-lg hover:bg-blueGray-700">
          {link.title}
        </a>)}
    </div>;
  }

  return (
    <div className="bg-gray-100 px-5 py-3 rounded-2xl">
      <h3 className="text-orange text-xl font-bold">{entry.company}</h3>
      <h3 className="text-green text-lg font-bold mb-2">
        {entry.title}
        <span className="text-blueGray-600"> {entry.date}</span>
      </h3>

      <div className="space-y-4">
        <p className="text-darkBlue text-sm sm:text-sm">  
          {entry.description}
        </p>
        
        {buttons}
      </div>
    </div>
  );
}