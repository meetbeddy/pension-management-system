import React, { useState, useEffect } from "react";
import AppHeader from "./appHeader/appHeader";
import SideNav from "./sidenav/SideNav";
import JsonData from "../../data/data.json";
import ControlSIdebar from "./ControlSIdebar";
import { Routes, Route, Navigate } from "react-router";

function Dashboard(props) {
  const [navigationData, setNagivationData] = useState({});

  useEffect(() => {
    setNagivationData(JsonData);
  }, []);

  if (!props.user) {
    return (
      <Routes>
        <Route path="*" element={<Navigate replace to="/auth/signin" />} />
      </Routes>
    );
  }
  return (
    <>
      <AppHeader {...props} />
      <SideNav {...props} data={navigationData.Dashboard} />
      <ControlSIdebar />
      {props.children}
    </>
  );
}

export default Dashboard;
