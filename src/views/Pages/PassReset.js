import React, {useContext} from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// @material-ui/icons
import MailOutline from "@material-ui/icons/MailOutline";
import Contacts from "@material-ui/icons/Contacts";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardText from "components/Card/CardText.js";
import CardIcon from "components/Card/CardIcon.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import AddAlert from "@material-ui/icons/AddAlert";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";
import authService from 'services/authService';
import {Text, LanguageContext} from 'utils/Language';
const useStyles = makeStyles(styles);

export default function PassReset() {
  const {dictionary} = useContext(LanguageContext);

  const classes = useStyles();
  const [alert, setAlert] = React.useState(null);
  const successAlert = () => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Sent navin@gmail.com"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.confirmButton + " " + classes.success}
      >
        Please check this mail and reset password.
      </SweetAlert>
    );
  };
  const [registerEmail, setregisterEmail] = React.useState("");
  const [registerEmailState, setregisterEmailState] = React.useState("");
  const [
    registerConfirmPasswordState,
    setregisterConfirmPasswordState
  ] = React.useState("");
  const [registerCheckbox, setregisterCheckbox] = React.useState(false);
  const [registerCheckboxState, setregisterCheckboxState] = React.useState("");

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [br, setBR] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const verifyEmail = value => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };
  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };
  const loginClick = () => {
    if (registerEmailState === "") {
      setregisterEmailState("error");
    }
    else if(registerEmail !== "navin@gmail.com"){
      showNotification("br");
    }
    else if(registerEmail == "navin@gmail.com"){
      successAlert();
      // window.location.href = "/auth/login-page";
    }
  };
  React.useEffect(() => {
    let id = setTimeout(function() {
      setCardAnimation("");
    }, 700);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.clearTimeout(id);
    };
  });
  const showNotification = place => {
    switch (place) {
      case "bc":
        if (!bc) {
          setBC(true);
          setTimeout(function() {
            setBC(false);
          }, 6000);
        }
        break;
      case "br":
        if (!br) {
          setBR(true);
          setTimeout(function() {
            setBR(false);
          }, 6000);
        }
        break;
      default:
        break;
    }
  }
  const hideAlert = () => {
    setAlert(null);
    window.location.href = "/auth/login-page";
  };
  return (
    <div className={classes.container}>
      {alert}
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={6}>
          <Card login className={classes[cardAnimaton]}>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Check />
            </CardIcon>
            <h4 className={classes.cardIconTitle}><Text tid="recoveryPassword" /></h4>
          </CardHeader>
          <CardBody>
            <form>
              <CustomInput
                success={registerEmailState === "success"}
                error={registerEmailState === "error"}
                labelText={dictionary.login + "*"}
                id="registeremail"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event => {
                    if (verifyEmail(event.target.value)) {
                      setregisterEmailState("success");
                    } else {
                      setregisterEmailState("error");
                    }
                    setregisterEmail(event.target.value);
                  },
                  type: "email"
                }}
              />
              <div className={classes.center}>
              <Button
                color="rose"
                onClick={loginClick}
                className={classes.registerButton}
              >
               <Text tid="send" />
              </Button>
              <Button
                color="rose"
                className={classes.registerButton}
              >
                <a href="/auth/login-page" className={classes.white}>
                <Text tid="goLogin" />
                </a>
              </Button>
              </div>
            </form>
          </CardBody>
        </Card>
        <Snackbar
            place="br"
            color="danger"
            icon={AddAlert}
            message="Something went wrong. Server error or network connection error. Please try again later."
            open={br}
            closeNotification={() => setBR(false)}
            close
        />
        </GridItem>
      </GridContainer>
    </div>
  );
}
