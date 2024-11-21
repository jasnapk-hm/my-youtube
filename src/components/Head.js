import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/Slice";
import { SEARCH_API } from "../utils/constants";

function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion,setShowSuggestions] =useState(false)

  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchQuery();
    }, 800);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchQuery = async () => {
    const res = await fetch(SEARCH_API + searchQuery);
    const data = await res.json();
    console.log("api response", data[1]);
    setSuggestions(data[1]);
  };

  const handleClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg p-3 m-2">
      <div className="flex col-span-1">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEX///8AAABLS0vPz8+Wlpb39/fFxcWQkJCmpqaCgoI4ODhiYmLr6+vh4eGxsbF0dHQbGxvX19cQEBCIiIh6enpXV1egoKC7u7tcXFxvb28ZGRl6p2Y9AAACVUlEQVR4nO3di04CMRCF4QrsglwE8e77P6jZqEGjmXZpk8mZ/t8TzMkuLS1DmxIAAAAAAAAAAAAAAAAAdGBc7xY6dutxXrz9442ex315wLV3sVdaF+Ybtt6VXm07FAU8e9dZ4VwSUfcJTrb5gLfeNVa6zQU8eFdY7ZBJuPMusNrODjh419eAPdjceZfXwJ2Z8OhdXgNHM6H2VPHJnjC8q2ui84Qn7+oaOJkJn7zLa+DJTKi6bvrJXkMtvctr4N5MGGGosQOmjXd91TaZhPKjqT2STu69S6yU+RTqv6fZd3Ty7F1lheeSgCmN3nVerXhbeNBcRB2L9hK/7Fdq66jtasaW99eDPCx1HOY8PgAAAAAAAAAAIGYYNysdm3HuDxcvC+/fkmZbvMzIt9RsVzgtSwPqNrNn29g/vXrXWeG1JOCbd5VV3vIB1Tu97S7vFKFZPzdtPHgXWO0hk9C7vgbsgLrNQhd225DuVHhhT4p6X9b+WpgJlf9d+e1sJvSuronOn2H8z2H8sTT+fBhhqLEDdvC9NP7aIv76sIM1fgf7NMqjTeFeWwf7pSn+nvck+u8WAAAAAAAAAABASPBzoqKf9RX+vDbdtqHCM/fCn5sY/uzL+OeXvnuXWCl7Bq32OzrJvafe9TVgB4x/nnf8M9njn6uv2e71mz2aelfXROcJ1dZM/7HvmdFcNv1m3xWk3uU9sTu99Vv1s8364e9d6+DuPPn/dhU0s2tPGAV3WKZBeQ1cdA9p/Ltkk+4aqvQ+4NTBnc6T4PdyAwAAAAAAAAAAAAAAAICmD8U+UWQoPgYYAAAAAElFTkSuQmCC"
          className="w-9 h-9 cursor-pointer  mr-2"
          alt="menu-logo"
          onClick={() => handleClick()}
        ></img>
        <img
          className="w-12 h-10"
          src="https://i.pinimg.com/564x/7b/8e/f1/7b8ef10ce620786671b15b0704ec9c0a.jpg"
          alt="youtube-logo"
        ></img>
      </div>
      <div>
        <input
          className="border-2 border-gray-400 pl-4 col-span-10 w-1/2  rounded-l-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>setShowSuggestions(false)}
        ></input>
        <button className=" border-gray-400 border-2 ml-0   hover:bg-slate-300  rounded-r-full w-1/12 ">
          🔍
        </button>
        <div className="fixed py-2 px-5 absolute bg-slate-100 shadow-lg rounded-lg w-[24rem]">
          <ul>
            {showSuggestion && suggestions?.map((s) => (
              <li
                key={s}
                className="py-2 shadow-sm hover:bg-gray-200  rounded-lg "
              >
                🔍 {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className=" grid justify-items-end">
        <img
          src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTY1LWtsaGN3ZWNtLmpwZw.jpg"
          className="w-9 h-9 col-span-1 "
          alt="user"
        ></img>
      </div>
    </div>
  );
}

export default Head;
