import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  border-style: none;
  border-bottom: 1px solid #e8e8e8;
`;

const StyledLi = styled.li`
  font-family: Montserrat, sans-serif;
  font-size: 13px;
  letter-spacing: 1.9px;
  color: #121212;
`;

const StyledLink = styled.a`
  font-size: 30px;
  color: #0290ff !important;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 37px;
`;

const Navbar = () => (
  <StyledNav className="navbar navbar-light navbar-expand-md d-xl-flex navigation-clean bg-white">
    <div className="container">
      <StyledLink className="navbar-brand" href="/">
        Bookstore CMS
      </StyledLink>
      <button
        type="button"
        data-toggle="collapse"
        className="navbar-toggler"
        data-target="#navcol-1"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navcol-1">
        <ul className="nav navbar-nav mr-auto">
          <StyledLi className="nav-item">
            <a className="nav-link" href="/">
              BOOKS
            </a>
          </StyledLi>
          <StyledLi className="nav-item">
            <a className="nav-link" href="/">
              CATEGORIES
            </a>
          </StyledLi>
        </ul>
      </div>
      <i className="fa fa-user-circle-o fa-2x" style={{ color: '#0290ff' }} />
    </div>
  </StyledNav>
);

export default Navbar;
