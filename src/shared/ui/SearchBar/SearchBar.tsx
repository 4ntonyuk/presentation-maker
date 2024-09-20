import { useState } from "react";

import { Icon } from "@/shared/ui"

export function SearchBar() {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="max-w-[1088px] w-full flex justify-center">
      <form className="relative max-w-[720px] w-full">
        <Icon 
          type="search" 
          className="absolute top-1/2 left-2 -translate-y-1/2 p-2" 
          onClick={() => {}} 
        />
        <input 
          type="text" 
          name="search" 
          id="search" 
          placeholder="Поиск" 
          className="w-full outline-none bg-[#f0f3f8] py-3 pl-14 rounded-full placeholder:font-roboto placeholder:text-[#39424d] active:bg-white active:shadow-sm active:shadow-[#a1a1a1] focus:bg-white focus:shadow-sm focus:shadow-[#a1a1a1]" 
          onChange={(e) => {setInputValue(e.target.value)}}
          value={inputValue}
        />
        {inputValue && (
          <Icon 
            type="close" 
            className="absolute top-1/2 right-2 -translate-y-1/2 p-2" 
            onClick={() => {setInputValue("")}} 
          />
        )}
      </form>
    </div>
  );
}
