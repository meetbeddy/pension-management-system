import React from "react";
import { Link } from "react-router-dom";
import { loadTree } from "./TreeLoader";

function NavItems(props) {
  const { menus, user } = props;

  // React.useEffect(() => {
  //   loadTree();
  // });
  const filteredMenus = menus?.filter((menu) => {
    if (user?.user?.admin === true) {
      return menu.admin || menu.admin === "both";
    } else {
      return !menu.admin || menu.admin === "both";
    }
  });

  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        {filteredMenus?.map((menu) =>
          menu.type === "single" ? (
            <li key={menu.id} className="nav-item" style={{ width: "100%" }}>
              <Link to={menu?.path} className="nav-link">
                <i className={menu.icon}></i>
                <p>{menu.name}</p>
              </Link>
            </li>
          ) : (
            <li key={menu.id} className="nav-item" style={{ width: "100%" }}>
              <a href="dashboard" className="nav-link">
                <i className={menu.icon}></i>
                <p>
                  {menu.name}
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                {menu?.inner.map((innermenu) => (
                  <li key={innermenu.id * Math.random()} className="nav-item">
                    <Link to={innermenu.path} className="nav-link">
                      <i className={innermenu.icon}></i>
                      <p>{innermenu.name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default NavItems;
