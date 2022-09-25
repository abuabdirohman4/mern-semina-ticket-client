import React from "react";
import { Nav } from "react-bootstrap";

function NavAccess({ role, roles, action, children }) {
  let isHas = roles.indexOf(role);
  return <Nav.Link onClick={action}>{children}</Nav.Link>;
}

export default NavAccess;
