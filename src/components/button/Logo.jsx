import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/", { replace: true });
  };
  return (
    <button className="flex justify-center items-center" onClick={routeChange}>
      <img src={"/assets/SPACE.png"} className="w-30 h-7" alt="logo" />
    </button>
  );
};

export default Logo;
