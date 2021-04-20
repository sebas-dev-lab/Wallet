import React, { useEffect } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { verifySession } from "../../Redux/Actions/auth";

const ProtectedAdminRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.auth.user);
  let coins = [];
  if (Object.keys(user).length > 0) {
    if (user.walletMsj === "ok") {
      for (let j in user.total.data) {
        coins.push(user.total.data[j]);
      }
    }
  }
  useEffect(() => {
    dispatch(verifySession(history));
  }, []);
  if (user) {
    return (
      <Route
        {...rest}
        render={(props) => {
          return <Component user={user} coins={coins} />;
        }}
      />
    );
  } else {
    return <Redirect to={`/login`} />;
  }
};

export default ProtectedAdminRoute;
