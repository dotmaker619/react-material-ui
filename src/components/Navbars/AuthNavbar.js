import React, {useContext, useState, useEffect} from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Menu from "@material-ui/icons/Menu";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Fingerprint from "@material-ui/icons/Fingerprint";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import LockOpen from "@material-ui/icons/LockOpen";
import MonetizationOn from "@material-ui/icons/MonetizationOn";


// core components
import Button from "components/CustomButtons/Button";

import styles from "assets/jss/material-dashboard-pro-react/components/authNavbarStyle.js";
import { languageOptions } from '../../utils/languages';
import {Text, LanguageContext} from 'utils/Language';
import * as storageService from 'services/storageService';
const useStyles = makeStyles(styles);

export default function AuthNavbar(props) {
  const [open, setOpen] = React.useState(false);
  const { userLanguage, userLanguageChange, dictionary } = useContext(LanguageContext);
  const [currentLang, setCurrentLang] = useState(storageService.getStorage('rcml-lang'));

  useEffect(() => {
    userLanguageChange(storageService.getStorage('rcml-lang'));

  }, [])

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  // verifies if routeName is the one active (in browser input)
  const activeRoute = routeName => {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  };
  const handleClick = item => {
    userLanguageChange(item);
    setCurrentLang(item);

  };
  const classes = useStyles();
  const { color, brandText } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color
  });
  var list = (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/auth/register-page"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/auth/register-page")
          })}
        >
          <PersonAdd className={classes.listItemIcon} />
          <ListItemText
            primary={<Text tid="register" />}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/auth/login-page"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/auth/login-page")
          })}
        >
          <Fingerprint className={classes.listItemIcon} />
          <ListItemText
            primary={<Text tid="login" />}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/* <NavLink
          to={"/auth/lock-screen-page"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/auth/lock-screen-page")
          })}
        >
          <LockOpen className={classes.listItemIcon} />
          <ListItemText
            primary={"Lock"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink> */}
        <CustomDropdown
            buttonText={currentLang}
            hoverColor="info"
            buttonProps={{
            round: true,
            block: true,
            color: "info"
          }}
          onClick={handleClick}
          dropPlacement="bottom"
          dropdownList={Object.keys(languageOptions)}
        />
      </ListItem>
    </List>
  );
  return (
    <AppBar position="static" className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown>
          <div className={classes.flex}>
            <Button href="#" className={classes.title} color="transparent">
              {brandText}
            </Button>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.flex}>
            <Button href="#" className={classes.title} color="transparent">
              MD Pro React
            </Button>
          </div>
        </Hidden>
        <Hidden smDown>{list}</Hidden>
        <Hidden mdUp>
          <Button
            className={classes.sidebarButton}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </Button>
        </Hidden>
        <Hidden mdUp>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={"right"}
              open={open}
              classes={{
                paper: classes.drawerPaper
              }}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {list}
            </Drawer>
          </Hidden>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

AuthNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string
};
