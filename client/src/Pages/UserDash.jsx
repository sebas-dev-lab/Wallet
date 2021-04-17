import React from "react";
import DashUser from "../Components/DashUser";
import NavBar from "../Components/NavBar";

const UserDash = ({ user, coins }) => {
  let nav = "dash";

  return (
    <>
      {" "}
      <NavBar type={nav} />
      <DashUser user={user} coins={coins} />
    </>
  );
};

export default UserDash;
