import React, { useEffect } from "react";
import NavBar from "../Components_new/NavBar/TopNav";
import { useSelector, useDispatch } from "react-redux";
import { verifySession } from "../Redux/Actions/auth";
import { useHistory } from "react-router-dom";
import HomePage from "../Components_new/Home/Home";

const nav_type = {
  not: false,
  ok: true,
};

const Home = ({ toggle, themeState }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector((state) => state.auth.user);
  useEffect(() => {
    dispatch(verifySession(history));
  }, []);
  let nav = nav_type.not;

  if (data) {
    if (data.id) {
      nav = nav_type.ok;
    }
  }
  return (
    <>
      {!nav ? (
        <>
          <NavBar type={nav} toggle={toggle} themeState={themeState} />
          <br></br>
          <HomePage />
        </>
      ) : null}
    </>
  );
};

export default Home;
