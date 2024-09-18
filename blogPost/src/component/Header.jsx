import React from "react";
import { useState } from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
// import ViewWeekIcon from "@mui/icons-material/ViewWeek";

export default function Header() {
  return (
    <>
      <div className="relative py-14">
        <div className="absolute inset-0 flex justify-center items-center">
          <div>
            <LibraryBooksIcon />
          </div>
          <h1 className="text-center text-white font-bold text-4xl text-shadow">
            {/*text-slate-900*/}
            BLOG POST VIEWER
          </h1>
        </div>
      </div>
      
    </>
  );
}
