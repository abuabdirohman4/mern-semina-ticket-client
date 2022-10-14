import React from 'react';
import { Nav } from 'react-bootstrap';

function NavLink({ role, roles, action, children }) {
  // console.log("roles ", roles);
  // console.log("role ", role);
  let isHas = roles.indexOf(role); // returns -1 if the value is not found
  // console.log(isHas)
  return <>{isHas >= 0 && <Nav.Link onClick={action}>{children}</Nav.Link>}</>;
}

export default NavLink;
