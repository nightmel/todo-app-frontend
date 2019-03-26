import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


function MenuComponent (props) {
    return (
            <div>
              <p>pra menu lateral</p>
              <Nav>
                <NavItem>
                  <button>oi</button>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link2</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem>
              </Nav>
              <hr />
              <p>pra menu horizontal</p>
              <Nav>
                <NavLink href="#">Link1</NavLink> <NavLink href="#">Link2</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
              </Nav>
            </div>
    );
};

export default MenuComponent;
