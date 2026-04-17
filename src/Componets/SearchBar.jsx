import React from "react";
import { Search} from "lucide-react";

const SearchBar = ({ searchTerm, setSearchTerm, placeholder, className }) => {

    return(
    <div className={`relative mt-12 ${className}`}>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="glass border flex items-center archivo white text-[14px] bg-(--secondary-color) backdrop-blur-2xl pl-12 pr-6 lg:py-4 border-[#ffced]/20 outline-offset-0 focus:outline-(--secondary-color)/60 focus:border-[#fffced] rounded-sm placeholder:text-[15px] placeholder:text-[#fffced] w-full hover:w-full transition-width duration-350 ease-in-out"
      />

      <Search className="white absolute left-3 top-[15.5px] size-5" />
    </div>

    );
};

export default SearchBar;