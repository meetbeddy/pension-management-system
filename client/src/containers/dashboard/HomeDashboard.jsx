import StaffDashboard from "../staff/StaffDashboard";
import { useSelector } from "react-redux";

function HomeDashboard(props) {
  const userprofile = useSelector((state) => state.userProfile);

  const { user } = userprofile.profile;

  return (
    <>
      <StaffDashboard {...props} user={user} />
    </>
  );
}

export default HomeDashboard;
