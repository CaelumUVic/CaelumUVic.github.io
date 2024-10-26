import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Drawer, List, useMediaQuery } from "@mui/material";
import { motion, TargetAndTransition, VariantLabels } from "framer-motion";
import NavButton from "./NavButton.tsx";

function CustomNavbar() {
  const animationFinal: VariantLabels | TargetAndTransition | undefined = {
    scale: [null, 1.1, 1.05],
  };

  const theme = useTheme();

  const animationInitial = { scale: 1 };
  const animationTransition = { duration: 0.3 };

  //const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open: boolean) => {
    setMenuOpen(open);
  };

  return (
    <AppBar
      position="static"
      sx={{ marginBottom: "1em", backgroundColor: "#3b4252" }}
    >
      <Toolbar>
        <Link to={"/"} style={{ flexGrow: 1 }}>
          <Typography variant="h2">Caelum Dudek</Typography>
        </Link>

        {isMobile ? (
          <Box>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              sx={{ width: "40vw" }}
              open={menuOpen}
              onClose={() => toggleDrawer(false)}
            >
              <List>
                <Link to={"/"} onClick={() => toggleDrawer(false)}>
                  <motion.p
                    className={"growing-hover"}
                    initial={animationInitial}
                    whileHover={animationFinal}
                    transition={animationTransition}
                  >
                    <NavButton buttonText={"Home"} />
                  </motion.p>
                </Link>
                <Link to={"/projects"} onClick={() => toggleDrawer(false)}>
                  <motion.p
                    className={"growing-hover"}
                    initial={animationInitial}
                    whileHover={animationFinal}
                    transition={animationTransition}
                  >
                    <NavButton buttonText={"Projects"} />
                  </motion.p>
                </Link>
                <Link to={"/experience"} onClick={() => toggleDrawer(false)}>
                  <motion.p
                    className={"growing-hover"}
                    initial={animationInitial}
                    whileHover={animationFinal}
                    transition={animationTransition}
                  >
                    <NavButton buttonText={"Experience"} />
                  </motion.p>
                </Link>
                <Link to={"/blogs"} onClick={() => toggleDrawer(false)}>
                  <motion.p
                    className={"growing-hover"}
                    initial={animationInitial}
                    whileHover={animationFinal}
                    transition={animationTransition}
                  >
                    <NavButton buttonText={"Blogs"} />
                  </motion.p>
                </Link>
              </List>
            </Drawer>
          </Box>
        ) : (
          <>
            <Link to={"/"}>
              <motion.p
                className={"growing-hover"}
                initial={animationInitial}
                whileHover={animationFinal}
                transition={animationTransition}
                whileTap={animationFinal}
              >
                <NavButton buttonText={"Home"} />
              </motion.p>
            </Link>
            <Link to={"/projects"}>
              <motion.p
                className={"growing-hover"}
                initial={animationInitial}
                whileHover={animationFinal}
                transition={animationTransition}
                whileTap={animationFinal}
              >
                <NavButton buttonText={"Projects"} />
              </motion.p>
            </Link>
            <Link to={"/experience"}>
              <motion.p
                className={"growing-hover"}
                initial={animationInitial}
                whileHover={animationFinal}
                transition={animationTransition}
                whileTap={animationFinal}
              >
                <NavButton buttonText={"Experience"} />
              </motion.p>
            </Link>
            <Link to={"/blogs"}>
              <motion.p
                className={"growing-hover"}
                initial={animationInitial}
                whileHover={animationFinal}
                transition={animationTransition}
                whileTap={animationFinal}
              >
                <NavButton buttonText={"Blogs"} />
              </motion.p>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default CustomNavbar;