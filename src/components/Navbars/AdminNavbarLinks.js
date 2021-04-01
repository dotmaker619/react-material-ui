import React, { useContext, useState, useEffect } from "react";
import { connect } from 'react-redux';
import classNames from "classnames";
import PropTypes from "prop-types";
import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom";

// import { Manager, Target, Popper } from "react-popper";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Search from "@material-ui/icons/Search";
import Notifications from "@material-ui/icons/Notifications";

// @material-ui/icons
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import Popper from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";

import styles from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";

// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import Person from "@material-ui/icons/Person";
import Button from "components/CustomButtons/Button.js";

import { languageOptions } from '../../utils/languages';
import { Text, LanguageContext } from '../../utils/Language';
import { Link } from "react-router-dom";
import * as authAction from 'redux/actions/auth';
import * as mainAction from 'redux/actions/main';
import * as storageService from 'services/storageService';


const useStyles = makeStyles(styles);

const HeaderLinks = (props) => {
  const [openNotification, setOpenNotification] = useState(null);
  const { userLanguage, userLanguageChange, dictionary } = useContext(LanguageContext);
  const [currentLang, setCurrentLang] = useState(storageService.getStorage('rcml-lang'));
  const handleClickNotification = event => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };
  useEffect(() => {
    userLanguageChange(storageService.getStorage('rcml-lang'));

  }, [])
  const handleClick = item => {
    userLanguageChange(item);
    setCurrentLang(item)
  };
  const handleCloseNotification = () => {
    setOpenNotification(null);
  };
  const [openProfile, setOpenProfile] = useState(null);
  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    console.log('effffffffffffff');
   
    setOpenProfile(null);
  };
  const handleLogOut = () => {
    props.logout()
    storageService.removeStorage('token')
    storageService.removeStorage('user')
  }
  const handleSetting = () => {
    props.ShowSetting(!props.showSetting)
    if(props.showSetting){

      setOpenProfile(null);
    }

  }
  const classes = useStyles();
  const { rtlActive } = props;
  const searchButton =
    classes.top +
    " " +
    classes.searchButton +
    " " +
    classNames({
      [classes.searchRTL]: rtlActive
    });
  const dropdownItem = classNames(classes.dropdownItem, classes.primaryHover, {
    [classes.dropdownItemRTL]: rtlActive
  });
  const wrapper = classNames({
    [classes.wrapperRTL]: rtlActive
  });
  const managerClasses = classNames({
    [classes.managerClasses]: true
  });
  return (
    <div className={wrapper}>
      <div className={managerClasses}>
      <CustomInput
        rtlActive={rtlActive}
        formControlProps={{
          className: classes.top + " " + classes.search
        }}
        inputProps={{
          placeholder: dictionary.search,
          inputProps: {
            "aria-label": "Search",
            className: classes.searchInput
          }
        }}
      />
      <Button
        color="white"
        aria-label="edit"
        justIcon
        round
        className={searchButton}
      >
        <Search className={classes.headerLinksSvg + " " + classes.searchIcon} />
      </Button>
        <Button
          color="transparent"
          aria-label="Person"
          justIcon
          aria-owns={openProfile ? "profile-menu-list" : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
          className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
          muiClasses={{
            label: rtlActive ? classes.labelRTL : ""
          }}
        >
          <Person
            className={
              classes.headerLinksSvg +
              " " +
              (rtlActive
                ? classes.links + " " + classes.linksRTL
                : classes.links)
            }
          />
          <Hidden mdUp implementation="css">
            <span onClick={handleClickProfile} className={classes.linkText}>
              {dictionary.profile}
            </span>
          </Hidden>
        </Button>
        <Popper
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          placement="bottom"
          className={classNames({
            [classes.popperClose]: !openProfile,
            [classes.popperResponsive]: true,
            [classes.popperNav]: true
          })}
        >
          {({ TransitionProps }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list"
              style={{ transformOrigin: "0 0 0" }}
            >
              <Paper className={classes.dropdown}>
                <ClickAwayListener >
                  <MenuList role="menu">
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={dropdownItem}
                    >
                      <Link to="/admin/profile">{dictionary.profile}</Link>
                    </MenuItem>
                    <MenuItem
                      onClick={handleSetting}
                      className={dropdownItem}
                    >
                      <Link>{dictionary.setting}</Link>
                    </MenuItem>
                    <Divider light />
                    <MenuItem
                      onClick={handleLogOut}
                      className={dropdownItem}
                    >
                      <Link to="/auth/login-page">{dictionary.logOut}</Link>
                    </MenuItem>
                  
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      <div className={managerClasses}>
        <Button
          color="transparent"
          justIcon
          aria-label="Notifications"
          aria-owns={openNotification ? "notification-menu-list" : null}
          aria-haspopup="true"
          onClick={handleClickNotification}
          className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
          muiClasses={{
            label: rtlActive ? classes.labelRTL : ""
          }}
        >
          <Notifications
            className={
              classes.headerLinksSvg +
              " " +
              (rtlActive
                ? classes.links + " " + classes.linksRTL
                : classes.links)
            }
          />
          <span className={classes.notifications}>2</span>
          <Hidden mdUp implementation="css">
            <span
              onClick={handleClickNotification}
              className={classes.linkText}
            >
              Notification
            </span>
          </Hidden>
        </Button>
        <Popper
          open={Boolean(openNotification)}
          anchorEl={openNotification}
          transition
          disablePortal
          placement="bottom"
          className={classNames({
            [classes.popperClose]: !openNotification,
            [classes.popperResponsive]: true,
            [classes.popperNav]: true
          })}
        >
          {({ TransitionProps }) => (
            <Grow
              {...TransitionProps}
              id="notification-menu-list"
              style={{ transformOrigin: "0 0 0" }}
            >
              <Paper className={classes.dropdown}>
                <ClickAwayListener onClickAway={handleCloseNotification}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={dropdownItem}
                    >
                      Mike John responded to your email
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={dropdownItem}
                    >
                      You have 5 new tasks
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>

      <div className={managerClasses}>
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
      </div>
    </div>

  );
}

HeaderLinks.propTypes = {
  rtlActive: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => ({
  showSetting: state.main.showSetting
})

const mapDispatchToProps = ({
  logout: authAction.Logout,
  ShowSetting: mainAction.ShowSetting

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderLinks))
