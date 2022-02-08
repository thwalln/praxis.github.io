import * as React from "react";
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

const pages = [
  "Unsere Praxis",
  "Unsere Leistungen",
  "Öffnungszeiten",
  "Team",
  "Anfahrt",
  "Kontakt",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
              LOGO
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                variant="outlined"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Unsere Praxis
              </Button>
              <Button
                variant="outlined"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Unsere Leistungen
              </Button>
              <Button
                variant="outlined"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Team
              </Button>
              <Button
                variant="outlined"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Öffnungszeiten
              </Button>
              <Button
                variant="outlined"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Kontakt
              </Button>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
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
                <MenuItem key="edit">
                  <Typography textAlign="center">Unsere Praxis</Typography>
                </MenuItem>
                <MenuItem key="share">
                  <Typography textAlign="center">Unsere Leistungen</Typography>
                </MenuItem>
                <MenuItem key="share">
                  <Typography textAlign="center">Team</Typography>
                </MenuItem>
                <MenuItem key="share">
                  <Typography textAlign="center">Öffnungszeiten</Typography>
                </MenuItem>
                <MenuItem key="share">
                  <Typography textAlign="center">Kontakt</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
