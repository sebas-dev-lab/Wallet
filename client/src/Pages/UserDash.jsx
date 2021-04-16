import React from "react";
import DashUser from "../Components/DashUser";
import NavBar from "../Components/NavBar";

const UserDash = () => {
  let nav = "dash";

  return (
    <>
      {" "}
      <NavBar type={nav} />
      <DashUser />;
    </>
  );
};

export default UserDash;
