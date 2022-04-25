import React, { useState, useEffect } from "react";
import AppHeader from "./appHeader/appHeader";
import SideNav from "./sidenav/SideNav";
import JsonData from "../../data/data.json";
import ControlSIdebar from "./ControlSIdebar";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../store/actions/authActions";

function Dashboard(props) {
  const [navigationData, setNagivationData] = useState({});
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile.userProfile);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    setNagivationData(JsonData);
  }, []);

  if (!props.user) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <AppHeader {...props} />
      <SideNav user={userProfile} data={navigationData.Dashboard} />
      <ControlSIdebar />
      {props.children}
    </>
  );
}

export default Dashboard;
