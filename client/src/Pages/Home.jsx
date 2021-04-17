import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Visitors from "../Components/Visitors";
import { useSelector, useDispatch } from "react-redux";
import { verifySession } from "../Redux/Actions/auth";
import { useHistory } from "react-router-dom";

const nav_type = {
  not: false,
  ok: true,
};

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(verifySession(history));
  }, []);
  let nav = false;
  if (data.userName) {
    nav = nav_type.ok;
  }
  return (
    <>
      <NavBar type={nav} />
      <Visitors />
    </>
  );
};

export default Home;
