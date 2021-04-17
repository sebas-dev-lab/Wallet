import React, { useEffect } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { verifySession } from "../../Redux/Actions/auth";

const ProtectedAdminRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector((store) => store.auth);
  let user = data.user;
  let coins = [];
  if (Object.keys(user).length > 0) {
    for (let j in data.total.data) {
      coins.push(data.total.data[j]);
    }
  }

  user.total = data.total.total_2;
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
