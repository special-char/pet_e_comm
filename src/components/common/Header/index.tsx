import React from "react";
import { navbarData } from "@/lib/data";
import Desktopnav from "./Desktopnav";
import Mobilenav from "./Mobilenav";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <header className="bg-green sticky top-0 z-40">
        <Desktopnav data={navbarData} />
        {/* <Mobilenav data={navbarData} /> */}
      </header>
    </>
  );
};

export default Header;
