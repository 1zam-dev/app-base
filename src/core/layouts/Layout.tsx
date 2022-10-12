import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";

export default function Layout() {
  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <div id={"content"}>
        <Outlet />
      </div>
    </React.Fragment>
  );
}
