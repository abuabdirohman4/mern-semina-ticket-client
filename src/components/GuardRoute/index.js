import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// // export default function GuardRoute({ children }) {
// export default function GuardRoute() {
//   let { token } = useSelector((state) => state.auth);

//   // console.log("children");
//   // console.log(children);
//   if (!token) return <Navigate to="/signin" replace={true} />;

//   // return children || <Outlet />;
//   return <Outlet />;
// }

export default function GuardRoute({ children }) {
  let { token } = useSelector((state) => state.auth);

  if (children) {
    if (token) return <Navigate to="/" replace={true} />;
    // return children;
  } else {
    if (!token) return <Navigate to="/signin" replace={true} />;
    // return <Outlet />;
  }
  return children || <Outlet />;
}
