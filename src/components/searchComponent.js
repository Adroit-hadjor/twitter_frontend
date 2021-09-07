import React,{useState} from 'react';
import { FaSearch} from 'react-icons/fa';

const SearchComponent = () => {
    const [icon_color,seticon_color] = useState("grey")
    return (
        <div className="search_container"> 
        <FaSearch className="search_icon"  size={18}  color={icon_color}/>
         <input onBlur={()=>{seticon_color("grey")}}  onFocus={()=>{seticon_color("rgb(29, 161, 242)")}} type="text" className="search"   placeholder={"Search Twitter"}/>
          </div>
    );
};

export default SearchComponent;