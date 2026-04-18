import React from "react";

export default function FilterByYear({ years, selectedYear, setSelectedYear }) {
  return (
<div className="flex gap-6 flex-col mt-12 lg:flex-row lg:gap-12 items-start lg:items-center justify-start">
         <h4 className="uppercase font-semibold archivo  text-[18px] lg:text-[20px] text-grey tracking-wider">
                  Filter<span className="font-bold"> By Year:</span>
                </h4>
    <div className="flex lg:gap-6 gap-4">
      <button
        onClick={() => setSelectedYear("All")}
        className={`px-6 border font-semibold border-(--secondary-color)/40 rounded-sm text-[14px] barlow transition-all duration-200
        ${
          selectedYear === "All"
            ? "bg-green white border-none"
            : "text-grey hover:bg-(--secondary-color) hover:text-white"
        }`}
      >
        All
      </button>

      {years.map((year) => (
        <button
          key={year}
          onClick={() => setSelectedYear(year)}
          className={`px-6 py-1 border barlow border-[1.59px] border-(--secondary-color)/75 font-semibold rounded-sm hover:text-white text-[15px] transition-all duration-200
          ${
            selectedYear === year
              ? "bg-green white border-none"
              : "text-grey hover:bg-(--secondary-color) hover:text-white"
          }`}
        >
          {year}
        </button>
      ))}
    </div>
    </div>
  );
}