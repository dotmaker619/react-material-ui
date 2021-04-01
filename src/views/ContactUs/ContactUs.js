/*eslint-disable*/
import React, {useEffect} from "react";
import { connect } from 'react-redux';
// @material-ui/core components
import SweetAlert from "react-bootstrap-sweetalert";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";

// material ui icons
import MailOutline from "@material-ui/icons/MailOutline";
import Contacts from "@material-ui/icons/Contacts";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardText from "components/Card/CardText.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

// style for this view
import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";
import * as mainService from 'services/mainService';
import { Text } from 'utils/Language';
import * as mainAction from 'redux/actions/main';

const useStyles = makeStyles(styles);

const  ContactUs = (props) => {
  // register form
  // login form
  const [message, setmessage] = React.useState("");
  const [messageState, setmessageState] = React.useState("");

  useEffect(() => {
   props.MiniActive(false)
  }, [])
  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };
  const supportClick = () => {
    if (messageState === "" || messageState ==="error") {
      setmessageState("error");
    } else {
      successAlert();
      // mainService.supportQuestion({message}).then(res => {
      //   console.log(res);
      // })
    }
  };
  const classes = useStyles();
  const [alert, setAlert] = React.useState(null);
  const successAlert = () => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Success!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.confirmButton + " " + classes.success}
      >
        Thanks for your support.
      </SweetAlert>
    );
  };
  const hideAlert = () => {
    setAlert(null);
    window.location.href = "/admin/support";
  };
  return (
    <div className={classes.container}>
    {alert}
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Contacts />
            </CardIcon>
            <h4 className={classes.cardIconTitle}><Text tid="reportProblem" />­­­</h4>
          </CardHeader>
          <CardBody>
            <form>
              <CustomInput
                  success={messageState === "success"}
                  error={messageState === "error"}
                  labelText={<Text tid="condition" />}
                  id="about-me"
                  formControlProps={{
                      fullWidth: true
                  }}
                  inputProps={{
                      multiline: true,
                      rows: 12,
                      onChange: event => {
                        if (verifyLength(event.target.value, 50)) {
                          setmessageState("success");
                        } else {
                          setmessageState("error");
                        }
                        setmessage(event.target.value);
                      },
                      type: "text"
                  }}
              />
              <div className={classes.formCategory}>
                <small>*</small> <Text tid="requiredFields" />
              </div>
              <div className={classes.center}>
                <Button color="rose" onClick={supportClick}>
                 <Text tid="sendMessage" />
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = ({
  MiniActive: mainAction.MiniActive
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs)
