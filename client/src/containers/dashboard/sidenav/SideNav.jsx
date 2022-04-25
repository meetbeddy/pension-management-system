import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import UserPannel from "./UserPannel";

function SideNav(props) {
  const { user } = props;

  return (
    <aside
      className="main-sidebar sidebar-dark-primary elevation-4"
      style={{ backgroundColor: "rgb(72,86,126)" }}
    >
      <Link
        to="/dashboard"
        className="brand-link"
        style={{ borderBottom: "1px solid rgb(50, 146, 231)" }}
      >
        {/* <img
          // src={"img/logo/unn-logo.png"}
          alt="Logo"
          className="brand-image  img-circle elevation-3"
        /> */}
        <span className="brand-text font-weight-light">Pen Safe</span>
      </Link>

      <div className="sidebar">
        <UserPannel user={user} />
        {/* <!-- Sidebar Menu --> */}

        <NavItem {...props} menus={props.data} />
      </div>
    </aside>
  );
}

export default SideNav;
