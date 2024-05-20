import { ReactComponent as Medify } from "../../assests/LOGO.svg";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useWidth } from "../../customhook";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const { width, height } = useWidth();
  const pages = ["Products", "Pricing", "Blog"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

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

  if (width > 768) {
    return (
      <nav className={styles.NavBarWrapper}>
        <div className={styles.Navicon}>
          <Medify style={{ width: "92px", height: "27px" }} />
        </div>
        <div className={styles.NavBarMenu}>
          <ul className={styles.subCont}>
            <li className={styles.menu}>Find Doctors</li>
            <li className={styles.menu}>Hospitals</li>
            <li className={styles.menu}>Medicines</li>
            <li className={styles.menu}>Surgeries</li>
            <li className={styles.menu}>Software for provider</li>
            <li className={styles.menu}>Facilities</li>
          </ul>
          <button className={styles.booking}>My bookings</button>
        </div>
      </nav>
    );
  } else {
    return (
      <AppBar position="static">
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
            <Medify style={{ width: "92px", height: "27px" }} />

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
                <ul >
                  <li onClick={() => window.location.reload()}>Find Doctors</li>
                  <li >Hospitals</li>
                  <li >Medicines</li>
                  <li >Surgeries</li>
                  <li >Software for provider</li>
                  <li >Facilities</li>
                </ul>
              </Menu>
            </Box>
  
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" },minHeight: '64px' }}>
            <ul sx={{height:"21px"}} >
            <li >Find Doctors</li>
            <li >Hospitals</li>
            <li >Medicines</li>
            <li >Surgeries</li>
            <li >Software for provider</li>
            <li >Facilities</li>
          </ul>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}
