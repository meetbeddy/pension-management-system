import React from "react";
import { Link } from "react-router-dom";

function NavItems(props) {
  const { menus, user } = props;

  let filterInner;

  const filteredMenus = menus?.filter((menu) => {
    if (user?.accessLevel === 3) {
      return menu.admin || menu.admin === "both";
    } else {
      if (user?.rsaPin !== null && menu.name === "RSA") {
        filterInner = menu?.inner?.filter((inner) => {
          return inner?.name === "RSA Info";
        });
      } else if (user?.rsaPin === null && menu.name === "RSA") {
        filterInner = menu?.inner?.filter(
          (inner) => inner?.name === "Register RSA"
        );
      }

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
              {menu.name !== "RSA" ? (
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
              ) : (
                <ul className="nav nav-treeview">
                  {filterInner.map((innermenu) => (
                    <li
                      key={filterInner.id * Math.random()}
                      className="nav-item"
                    >
                      <Link to={innermenu.path} className="nav-link">
                        <i className={innermenu.icon}></i>
                        <p>{innermenu.name}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default NavItems;
