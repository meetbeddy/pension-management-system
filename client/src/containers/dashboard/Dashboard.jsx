import React, { useState, useEffect } from "react";
import AppHeader from "./appHeader/appHeader";
import SideNav from "./sidenav/SideNav";
import JsonData from "../../data/data.json";
import ControlSIdebar from "./ControlSIdebar";

function Dashboard(props) {
  const [navigationData, setNagivationData] = useState({});

  useEffect(() => {
    setNagivationData(JsonData);
  }, []);

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
