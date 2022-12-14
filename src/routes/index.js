import { Route, Routes } from "react-router-dom";
import GuardRoute from "../components/GuardRoute";
// import GuestOnlyRoute from "../components/GuestOnlyRoute";

import Login from "../pages/signin";
import { HomeRoute } from "./HomeRoute";
import { CategoriesRoute } from "./CategoriesRoute";
import { TalentsRoute } from "./TalentsRoute";
import { PaymentsRoute } from "./PaymentsRoute";
import SNavbar from "../components/Navbar";
import { EventsRoute } from "./EventsRoute";
import { OrdersRoute } from "./OrdersRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="signin"
        element={
          /* user tidak boleh pakai token / untuk login / un-authentication */
          <GuardRoute>
            <Login />
          </GuardRoute>
        }
      />
      <Route
        path="/"
        element={
          /* authentication */
          <>
            <SNavbar />
            <GuardRoute />
          </>
        }
      >
        <Route path="dashboard/*" element={<HomeRoute />} />
        <Route path="categories/*" element={<CategoriesRoute />} />
        <Route path="talents/*" element={<TalentsRoute />} />
        <Route path="payments/*" element={<PaymentsRoute />} />
        <Route path="events/*" element={<EventsRoute />} />
        <Route path="orders/*" element={<OrdersRoute />} />
        {/* <Route path="" element={<Navigate to="/dashboard" replace={true} />} /> */}
        <Route path="*" element={<HomeRoute />} />
      </Route>
    </Routes>
  );
}
