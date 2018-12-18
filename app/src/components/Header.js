import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Header = ({ toggle, isOpen, appName, simpleItems, dropDownItems }) => (
  <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="#">{appName}</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {
            simpleItems.map(elem =>
              <NavItem>
                <NavLink href={elem.link}>{elem.name}</NavLink>
              </NavItem>
            )
          }
          {
            dropDownItems.map(elem =>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {elem.name}
                </DropdownToggle>
                <DropdownMenu right>
                  {
                    elem.drops.map(elem =>
                      <DropdownItem>
                        {elem}
                      </DropdownItem>
                    )
                  }
                </DropdownMenu>
              </UncontrolledDropdown>
            )
          }
        </Nav>
      </Collapse>
    </Navbar>
  </div>
);

Header.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  simpleItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  dropDownItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    drops: PropTypes.array.isRequired
  }).isRequired).isRequired
};

export default Header