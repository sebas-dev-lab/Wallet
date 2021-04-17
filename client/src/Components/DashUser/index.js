import React from "react";
import GridDash from "./data/grid";

const DashUser = ({ user, coins }) => {
  return (
    <>
      <GridDash user={user} coins={coins} />
    </>
  );
};

export default DashUser;
