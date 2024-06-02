import { ReactComponent as Medify } from "../../assests/LOGO.svg";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { useWidth } from "../../customhook";
import styles from "./NavBar.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function NavBar({ bg }) {
  const { width, height } = useWidth();
  const pages = ["Products", "Pricing", "Blog"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  NavBar.propTypes = {
    bg: PropTypes.string,
  };

  if (width > 1022) {
    return (
      <nav className={styles.NavBarWrapper} style={{ background: bg }}>
        <Medify
          style={{
            width: "92px",
            height: "27px",
            marginLeft: "95px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        />

        <div className={styles.NavBarMenu}>
          <ul className={styles.subCont}>
            <li
              className={styles.menu}
              onClick={() => navigate("/medical-centers")}
            >
              Find Doctors
            </li>
            <li
              className={styles.menu}
              onClick={() => navigate("/medical-centers")}
            >
              Hospitals
            </li>
            <li
              className={styles.menu}
              onClick={() => navigate("/medical-centers")}
            >
              Medicines
            </li>
            <li
              className={styles.menu}
              onClick={() => navigate("/medical-centers")}
            >
              Surgeries
            </li>
            <li
              className={styles.menu}
              onClick={() => navigate("/medical-centers")}
            >
              Software for provider
            </li>
            <li
              className={styles.menu}
              onClick={() => navigate("/medical-centers")}
            >
              Facilities
            </li>
          </ul>
          <button
            className={styles.booking}
            onClick={() => navigate("/bookings")}
          >
            My bookings
          </button>
        </div>
      </nav>
    );
  } else {
    return (
      <AppBar
        position="static"
        sx={{
          background: bg,
          padding: "10px",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Medify
              style={{
                width: "92px",
                height: "27px",
                marginLeft: "auto%",
                marginRight: "auto",
              }} onClick={() => navigate("/")}
            />

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <li
                    style={{
                      height: "21px",
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      marginTop: "4px",
                      marginBottom: "3px",
                      lineHeight: "21px",
                      color: "#102851",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/medical-centers")}
                  >
                    Find Doctors
                  </li>
                  <li
                    style={{
                      height: "21px",
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      marginTop: "4px",
                      marginBottom: "3px",
                      lineHeight: "21px",
                      color: "#102851",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/medical-centers")}
                  >
                    Hospitals
                  </li>
                  <li
                    style={{
                      height: "21px",
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      marginTop: "4px",
                      marginBottom: "3px",
                      lineHeight: "21px",
                      color: "#102851",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/medical-centers")}
                  >
                    Medicines
                  </li>
                  <li
                    style={{
                      height: "21px",
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      marginTop: "4px",
                      marginBottom: "3px",
                      lineHeight: "21px",
                      color: "#102851",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/medical-centers")}
                  >
                    Surgeries
                  </li>
                  <li
                    style={{
                      height: "21px",
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      marginTop: "4px",
                      marginBottom: "3px",
                      lineHeight: "21px",
                      color: "#102851",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/medical-centers")}
                  >
                    Software for provider
                  </li>
                  <li
                    style={{
                      height: "21px",
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      marginTop: "4px",
                      marginBottom: "3px",
                      lineHeight: "21px",
                      color: "#102851",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/medical-centers")}
                  >
                    Facilities
                  </li>
                  <li
                    style={{
                      height: "21px",
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      marginTop: "4px",
                      marginBottom: "3px",
                      lineHeight: "21px",
                      color: "#102851",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/bookings")}
                  >
                    My Bookings
                  </li>
                </ul>
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                minHeight: "64px",
              }}
            >
              <ul sx={{ height: "21px" }}>
                <li onClick={() => navigate("/medical-centers")}>Find Doctors</li>
                <li onClick={() => navigate("/medical-centers")}>Hospitals</li>
                <li onClick={() => navigate("/medical-centers")}>Medicines</li>
                <li onClick={() => navigate("/medical-centers")}>Surgeries</li>
                <li onClick={() => navigate("/medical-centers")}>Software for provider</li>
                <li onClick={() => navigate("/medical-centers")}>Facilities</li>
                <li onClick={() => navigate('/bookings')}>My Bookings</li>
              </ul>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}
