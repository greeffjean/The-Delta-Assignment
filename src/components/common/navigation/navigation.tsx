
import React, { FunctionComponent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./style/style.scss";
import { TAppState } from "../../../types/appState";
import { selectUserAccess } from "../../../redux/user/selectors";
import { connect } from "react-redux";
import { linksMap } from "../../../utils/routes.utils";
import logo from "../../../resources/img/cheapShark.png";

export type TNavProps = {
  userAccess: { [key: string]: boolean };
};

const mapStatetoProps = (state: TAppState) => ({
  userAccess: selectUserAccess(state),
});

const NavigationComponent: FunctionComponent<TNavProps> = ({ userAccess }) => {
  const links: JSX.Element[] = [];
  for (const [key, value] of Object.entries(userAccess)) {
    value && links.push(linksMap[key]);
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
             <img src={logo} alt="logo" />
            </IconButton>
            <div className="nav-list" role="nav-list">{links}</div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default connect(mapStatetoProps)(NavigationComponent);
