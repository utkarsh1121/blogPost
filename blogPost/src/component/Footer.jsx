import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Link, NavLink } from "react-router-dom";

export default function Footer({  isActive }) {
  return (
    <div>
      <NavLink
        to="/post"
        className={`py-2 pr-4 pl-3 duration-300 bottom-0 left-0 p-2 ${
          isActive ? "text-red-500" : "text-white"
        }
          hover:text-red-700`}
        // onClick={addBlogCard}
      >
        <AddIcon />
      </NavLink>
    </div>
  );
}
