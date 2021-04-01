import React, {useContext, useEffect, useState} from "react";
import { connect } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";
import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";

// @material-ui/icons
import MailOutline from "@material-ui/icons/MailOutline";
import AddAlert from "@material-ui/icons/AddAlert";
import Contacts from "@material-ui/icons/Contacts";
import Check from "@material-ui/icons/Check";
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardText from "components/Card/CardText.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";

import * as authAction from "../../redux/actions/auth";
import * as authService from '../../services/authService';
import * as storageService from '../../services/storageService';
import {Text, LanguageContext} from 'utils/Language';

const useStyles = makeStyles(styles);

const LoginPage = ({login, history}) => {
  const {dictionary} = useContext(LanguageContext);

  const [show, setShow] = useState(false);
  const [place, setPlace] = useState('br');
  const [message, setMessage] = useState('');
  const [registerEmail, setregisterEmail] = useState("");
  const [registerEmailState, setregisterEmailState] = useState("");
  const [registerPassword, setregisterPassword] = useState("");
  const [registerPasswordState, setregisterPasswordState] = useState("");
  const [registerCheckbox, setregisterCheckbox] = useState(false);
  const [registerCheckboxState, setregisterCheckboxState] = useState("");
  const [alert, setAlert] = useState(null);

  const successAlert = () => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Login Success!"
        confirmBtnCssClass={classes.confirmButton + " " + classes.success}
        confirmBtnStyle={{'display': 'none'}}
      >
        Welcome to our site.
      </SweetAlert>
    );
  };
 

  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
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
    if (registerPasswordState === "") {
      setregisterPasswordState("error");
    }
    if(registerEmailState !== "" && registerPasswordState !== ""){
      authService.logIn({login: registerEmail, password: registerPassword}).then(result => {
       if(result.status === 200){
          login(result.data.user)
          storageService.setStorage('token', result.data.token);
          storageService.setStorage('user', result.data.user);
          successAlert();
          setTimeout(() => {
            history.push("/admin/dashboard");
          }, 2000);
        } else {
          showNotification('br', result.data.message);
        }
      })
    }
  };
  useEffect(() => {
    let id = setTimeout(function() {
      setCardAnimation("");
    }, 700);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.clearTimeout(id);
    };
  });
  const classes = useStyles();
  const showNotification = (place, message) => {
    setPlace(place);
    setMessage(message);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 6000);
  };
  return (
    <div className={classes.container}>
      {alert}
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={6}>
          <Card login className={classes[cardAnimaton]}>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <MailOutline />
            </CardIcon>
            <h4 className={classes.cardIconTitle}><Text tid="login" /></h4>
          </CardHeader>
          <CardBody>
            <form>
              <CustomInput
                success={registerEmailState === "success"}
                error={registerEmailState === "error"}
                labelText={dictionary.email + " *"} 
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
              <CustomInput
                success={registerPasswordState === "success"}
                error={registerPasswordState === "error"}
                labelText={dictionary.password + " *"} 
                id="registerpassword"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event => {
                    if (verifyLength(event.target.value, 6)) {
                      setregisterPasswordState("success");
                    } else {
                      setregisterPasswordState("error");
                    }
                    setregisterPassword(event.target.value);
                  },
                  type: "password",
                  autoComplete: "off"
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={event => {
                      if (event.target.checked) {
                        setregisterCheckboxState("success");
                      } 
                      setregisterCheckbox(event.target.checked);
                    }}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />
                }
                classes={{
                  label:
                    classes.label +
                    (registerCheckboxState === "error"
                      ? " " + classes.labelError
                      : "")
                }}
                label={dictionary.rememberme + " *"} 
              />
              <FormLabel>
                <a href="/auth/passreset-page" className={classes.forgot}>
                  <Text tid="forgetMessage" />
                </a>
              </FormLabel>
              <div className={classes.right}>
              <Button
                color="rose"
                onClick={loginClick}
                className={classes.registerButton}
              >
                <Text tid="login" />
              </Button>
              
              <Button
                color="rose"
                className={classes.registerButton}
              >
                <a href="/auth/register-page" className={classes.white}>
                <Text tid="gotoregister" /> 
                </a>
              </Button>
              </div>
            </form>
            
          </CardBody>
        </Card>
        <Snackbar
            place={place}
            color="danger"
            icon={AddAlert}
            message={message}
            open={show}
            closeNotification={() => setShow(false)}
            close
              />
        </GridItem>
      </GridContainer>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = ({
  login: authAction.Signin,

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage))
