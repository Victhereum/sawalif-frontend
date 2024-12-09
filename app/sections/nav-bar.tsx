"use client";

import { LogoIcon } from "@/constants/images";
import Image from "next/image";

const NavBar: React.FC = () => {
  return (
    <header className="w-full z-20 px-4 md:px-20 2xl:pl-32 md:pt-10 md:pb-5 h-14 md:h-auto flex items-center sticky md:absolute top-0 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:shadow-none backdrop-blur-[16px] md:backdrop-blur-none bg-[rgba(8,9,16,0.75)] md:bg-transparent">
      <Image alt="Sawalif" className="h-7 md:h-10 w-7 md:w-10" src={LogoIcon} />
    </header>
  );
};

export default NavBar;
