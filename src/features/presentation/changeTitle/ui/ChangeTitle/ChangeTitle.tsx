import { useState, useRef, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { changeTitle, presentationSlice } from "@/entities/presentation/model/slice";

export function ChangeTitle() {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState<string>(
    useAppSelector((state) => state[presentationSlice.name].title)
  );
  useEffect(() => {
    if(inputRef.current)
      inputRef.current.style.width = `${(title.length + 3) * 9}px`;

    dispatch(changeTitle(title));
  }, [title])
  
  return (
    <input 
      type="text" 
      name="title" 
      id="title"
      className={`py-px h-6 border border-transparent rounded-[4px] font-gs  text-center text-lg ${title !== "Новая презентация" ? "text-[#000]" : "text-[#474747]"} hover:border-[#747775] focus:border-[#0B57D0] focus:text-[#000] outline-none focus:border-2 leading-0`}
      ref={inputRef}
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      onBlur={() => (title.length === 0) && setTitle("Новая презентация")}
    />
  )
}