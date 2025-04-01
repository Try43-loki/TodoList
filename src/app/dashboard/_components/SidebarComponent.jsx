import React from "react";
import WorkspaceComponent from "./WorkspaceComponent";
import FavoriteComponent from "./FavoriteComponent";
import LogoComponent from "../../../components/logoComponent";
import { LogOut } from "lucide-react";

function SidebarComponent() {
  return (
    <>
      <section className=" flex flex-col justify-around items-center h-full px-10 ">
        <LogoComponent />
        <WorkspaceComponent />
        <FavoriteComponent />
        <button className="flex justify-center items-center text-persian-green gap-2  self-start">
          <LogOut />
          <span className="text-xl font-semibold ">Logout</span>
        </button>
      </section>
    </>
  );
}

export default SidebarComponent;
