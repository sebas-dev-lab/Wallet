import React from "react";
import GridDash from "./data/grid";
import DashTable from "./data/table";

const DashUser = ({ user, coins }) => {
  return (
    <>
      <DashTable user={user} coins={coins} />
    </>
  );
};

export default DashUser;
