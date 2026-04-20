import React from "react";
import { Search } from "lucide-react";


const SearchBar = ({ searchTerm, setSearchTerm, placeholder, className }) => {

    return(
    <div className={`relative mt-12 ${className}`}>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="glass relative border flex items-center archivo white text-[16px] bg-(--secondary-color) backdrop-blur-2xl pl-16 pr-6 py-3 lg:py-4 border-[#ffced]/20 outline-offset-0 focus:outline-(--secondary-color)/60 focus:border-[#fffced] rounded-sm placeholder:text-[16px] placeholder:text-[#fffced] w-full hover:w-full transition-width duration-350 ease-in-out"
      />

     <Search className="absolute white lg:top-4 top-3 lg:size-6 size-5 left-4" />
    </div>

    );
};

export default SearchBar;