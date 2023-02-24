import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Outlet />
    </>
  );
}
