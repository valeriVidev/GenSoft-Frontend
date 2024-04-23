import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Image from "../assets/logo.png";
import BgIcon from "../assets/bg.svg";
import EnIcon from "../assets/en.svg";
import NavBarCSS from "../componentsCss/NavBar.module.css";
import { useEffect, useState } from "react";

import { useTranslation } from 'react-i18next';


function Navbar() {

  const [language, setLanguage] = useState("bg")
  const { t, i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language]);

  return (
    <NavbarBs
      expand="lg"
      fixed="top"
      className={` ${NavBarCSS.menu} ${NavBarCSS.navbar} navbar-dark `}
    >
      <Container className={NavBarCSS.container}>
        <NavbarBs.Brand>
          <Link to="/">
            <img
              src={Image}
              width="60"
              height="60"
              className={`${NavBarCSS.logo} d-inline-block align-top `}
              alt="Capital Plus Business and Property Brokers"
            />
          </Link>
        </NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBs.Collapse id="basic-navbar-nav">
          <Nav className={`${NavBarCSS.font_link} mx-auto `}>
            <Nav.Link
              to="/"
              as={NavLink}
              className={NavBarCSS.nav_links}
            >
              {t('primaryNav.services')}
            </Nav.Link>
            <Nav.Link
              to="/"
              as={NavLink}
              className={NavBarCSS.nav_links}
            >
              {t('primaryNav.businesses')}
            </Nav.Link>
            <Nav.Link
              to="/"
              as={NavLink}
              className={NavBarCSS.nav_links}
            >
              {t('primaryNav.properties')}
            </Nav.Link>
            <Nav.Link to="/" as={NavLink} className={NavBarCSS.nav_links}>
              {t('primaryNav.news')}
            </Nav.Link>
            <Nav.Link to="/" as={NavLink} className={NavBarCSS.nav_links}>
              {t('primaryNav.about_us')}
            </Nav.Link>
            <Nav.Link
              to="/"
              as={NavLink}
              className={NavBarCSS.nav_links}
            >
              {t('primaryNav.contact')}
            </Nav.Link>
          </Nav>
          <div className={NavBarCSS.alignment_icons}>

            <img
              src={BgIcon}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              onClick={() => { setLanguage("bg") }}
            />

            <img
              src={EnIcon}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              onClick={() => { setLanguage("en") }}
            />
          </div>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
