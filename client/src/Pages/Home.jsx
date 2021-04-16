import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Visitors from "../Components/Visitors";
import { useSelector, useDispatch } from "react-redux";
import { verifySession } from "../Redux/Actions/auth";

const nav_type = {
  not: false,
  ok: true,
};

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(verifySession());
  }, []);
  console.log(data);
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
