import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Shoes from "./Shoes";
import SingleShoe from "./SingleShoe";
import Protected from "../Components/Protected";
import { useSelector } from "react-redux";

const MainRoutes = () => {
  const { data } = useSelector((d) => d.authReducer);

  return (
    <Routes>
      <Route path="/" element={<Shoes />} />;
      <Route path="/login" element={<Login />} />
      <Route
        path="/shoes/:id"
        element={
          <Protected isLoggedIn={data.isAuth}>
            <SingleShoe />
          </Protected>
        }
      />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;
